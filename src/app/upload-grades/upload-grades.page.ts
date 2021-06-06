import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from '../services/json.service';
import { SessionService } from '../services/session.service';
import { Session } from '../model/session.model';
import { Student } from '../model/student.model';
import { Grade } from '../model/grade.model';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-upload-grades',
  templateUrl: './upload-grades.page.html',
  styleUrls: ['./upload-grades.page.scss'],
})
export class UploadGradesPage implements OnInit {

  constructor(private sessionService: SessionService, private jsonService: JsonService,
    private router: Router, private alertService: AlertService) {
    this.grade = { _id: null, grade_value: 0, name: null, date: null, id_grade: null };
  }

  corts: string[] = ['1 Corte', '2 Corte', '3 Corte'];
  session: Session;
  subject: number;
  grade: Grade;
  color = 'primary';
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

  uploadGrade(grade_value, code, cort) {
    
    if (!this.validateNumber(grade_value) || !grade_value) {
      alert("La nota debe ser un numero entero positivo")
      return;
    }
    var name = 'Materia';
    const date = new Date();
    const timestamp = date.getTime();
    try {
      this.jsonService.uploadGrade(timestamp, grade_value, cort, date, code, this.subject).subscribe((data) => {
        this.alertService.successfulAlert("Nota subida exitosamente")
      });
    } catch (error) {
      this.alertService.FailedAlert("Ocurrio un error al subir la nota, intenta nuevamente")
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

  getGradeByStudent(cort, code) {
    var url = this.router.parseUrl(this.router.url);
    this.subject = url.queryParams['subject'];
    var grade;
    try {
      this.jsonService.getGradeByStudent(this.subject, cort, code).subscribe((data) => {
        grade = data.grade;
        if (!this.validateNumber(grade)) {
          var inputElement = <HTMLInputElement>document.getElementById('grade');
          inputElement.value = null;
          this.color = 'danger';
        }
        else {
          this.color = 'success';
          var inputElement = <HTMLInputElement>document.getElementById('grade');
          inputElement.value = grade;
        }
      });
    } catch (error) {
      console.log('Error->', error);
    }
  }

  validateNumber(value) {
    if (isNaN(value)) {
      return false;
    } else {
      if (value % 1 == 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  validateGrade(grade) {
    //debugger;
    if (grade != null && grade.length > 0) {
      this.color = 'primary';
    }
  }

}
