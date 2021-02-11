import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AlertService } from '../alert.service';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})

export class EmailPage implements OnInit {
  message: string;
 
  constructor(private jsonService: JsonService,  private alertService: AlertService) { }

  ngOnInit() {
  }

  response: any;

  sendMail(subject, message){
    try {
      this.jsonService.sendMail("cristian-ramirez1@upc.edu.co", subject, message).subscribe((data) => {
        this.response = data;
        this.alertService.successfulAlert(this.response.msg);
      }, (error) => {
        this.alertService.FailedAlert("No se pudo enviar el correo");
      });
    } catch (error) {
      console.log('Error->', error);
    }


  }
}
