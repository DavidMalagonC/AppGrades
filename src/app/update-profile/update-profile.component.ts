import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JsonService } from '../services/json.service';
import { SessionService } from '../services/session.service';
import { Session } from '../model/session.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {

  session: Session;

  ngOnInit() {
    this.session = this.sessionService.getSessionLogged();
  }

  
  constructor(public modalCtrl: ModalController, private jsonService: JsonService, private sessionService: SessionService) {}

 /*  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  } */
  update(email, password, name, lastname, code, degree){
    try {
      
      let response;
      response.name = name.value;
      response.lastname = lastname.value;
      response.password = password.value;
      response.code = code.value;
      response.carreer = degree.value;
      response.email = email.value;
      
      if (response != null) {
        this.sessionService.setSessionLoggedIn(response);
      }

      this.jsonService.update(null, email,  password, name, lastname, code, degree).subscribe((data) => {
        response = data;
      })

     
     } catch (error) {
      console.log('Error', error);
    }
  
  }



}
