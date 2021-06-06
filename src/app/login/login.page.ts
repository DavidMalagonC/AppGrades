import { AuthService } from './../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';
import { JsonService } from '../services/json.service';
import { Session } from '../model/session.model';
import { SessionService } from '../services/session.service';
import { User } from '../model/user.model';
import Swal from 'sweetalert2';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  latitude= 4.586303;
  longitude= -74.227348;
  session: Session;
  message: string;
  image: string;

  constructor(private authSvc: AuthService, private jsonService: JsonService,
    private router: Router, private locationService: LocationService, private sessionService: SessionService,
    private alertService: AlertService) {

  }
  ngOnInit(): void {
    this.getLocation();
  }

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  login(email, password) {
    this.capture();
    try {
      this.jsonService.login(this.latitude, this.longitude, email.value, password.value,this.image).subscribe((data) => {
        let user: User;
        user = data;
        let session = new Session;
        session.user = user;
        if (User != null) {
          this.sessionService.setSessionLoggedIn(session);
          this.router.navigate(['profile']);
        }
      }, (error) => {
        this.alertService.FailedAlert("Credenciales incorrectas o servidor caido")
      });
    } catch (error) {
      console.log('Error->', error);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }

  getLocation() {
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
    });

  }

  WIDTH = 400;
  HEIGHT = 400;

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  captures: string[] = [];
  error: any;
  isCaptured: boolean;

  async ngAfterViewInit() {
    await this.setupDevices();
  }

  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }

  capture() {
    this.image = this.canvas.nativeElement.toDataURL("image/png")
    this.drawImageToCanvas(this.video.nativeElement);
    this.image = this.canvas.nativeElement.toDataURL("image/png")
    console.log(this.image);
    this.image =":(";
    //this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.isCaptured = true;
  }

  removeCurrent() {
    this.isCaptured = false;
  }

  setPhoto(idx: number) {
    this.isCaptured = true;
    var image = new Image();
    image.src = this.captures[idx];
    this.drawImageToCanvas(image);
  }

  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }

  
  
}
