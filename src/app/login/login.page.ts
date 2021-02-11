import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
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
    try {
      this.jsonService.login(this.latitude, this.longitude, email.value, password.value).subscribe((data) => {
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

  
}
