import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from '../services/json.service';
import { SessionService } from '../services/session.service';
import { Session } from '../model/session.model';
import { Student } from '../model/student.model';


@Component({
  selector: 'app-upload-grades',
  templateUrl: './upload-grades.page.html',
  styleUrls: ['./upload-grades.page.scss'],
})
export class UploadGradesPage implements OnInit {

  constructor(private sessionService: SessionService, private jsonService: JsonService,
    private router: Router) { }

  session: Session;
  subject: number;
  students: Student[] 
  = [
    {
        "location": {
            "latitud": 4.6381,
            "longitud": -74.18
        },
        "_id": "600daf20842b8c4ae41f0e4c",
        "name": "cristian",
        "lastname": "ramirez",
        "code": "1711157",
        "birthdate": null,
        "degree": "Ingenieria de Sistemas",
        "email": "cristian-ramirez1@upc.edu.co",
        "password": "123",
        "id_rol": 1,
        "__v": 2
    },
    {
        "location": {
            "latitud": 4.6381,
            "longitud": -74.19
        },
        "_id": "600ddce5d39d0230d89d2c2f",
        "name": "juan Perez",
        "lastname": "rodrigo",
        "code": "1711158",
        "birthdate": null,
        "degree": "Ingenieria de Sistemas",
        "email": "cristian-ramirez12@upc.edu.co",
        "password": "123",
        "id_rol": 1,
        "__v": 0
    },
    {
        "location": {
            "latitud": 4.58631,
            "longitud": -74.22734
        },
        "_id": "600def378ffc1b0a8c311a41",
        "name": "juan Perez",
        "lastname": "rodrigo",
        "code": "222",
        "birthdate": null,
        "degree": "Ingenieria de Sistemas",
        "email": "a",
        "password": "b",
        "id_rol": 1,
        "__v": 0
    }
];

  ngOnInit() {
    this.session = this.sessionService.getSessionLogged();
    this.getStudentsBySubject();
  }

  uploadGrade(grade_value, name, code) {
    try {
      this.jsonService.uploadGrade("1", grade_value, name, "12-09-20", code, this.subject).subscribe((data) => {

      });
    } catch (error) {
      console.log('Error->', error);
    }
  }

  getStudentsBySubject() {
    var url = this.router.parseUrl(this.router.url);

    this.subject = url.queryParams['subject'];
    try {
      this.jsonService.getStudentsBySubject(this.subject).subscribe((data) => {
        this.students = data;
        console.log(this.students);
      });
    } catch (error) {
      console.log('Error->', error);
    }

  }
}
