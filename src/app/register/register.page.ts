import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { JsonService } from '../services/json.service';
import { Session } from '../model/session.model';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private authSvc: AuthService, private router: Router, private jsonService : JsonService, private sessionService: SessionService) {}
  
  ngOnInit(): void {

  }
  

  async onRegister(email, password, name, lastname, code, degree) {
   /*  let request = {
      email.value, password, name, lastname, code, degree
    } */
    try {
     
      this.jsonService.register(null, email.value,  password.value, name.value, lastname.value, code.value, degree.value).subscribe((data) => {
        let response : Session;
        response = data;
        if (response != null) {
          this.sessionService.setSessionLoggedIn(response);
        }
      })
     } catch (error) {
      console.log('Error', error);
    }
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
