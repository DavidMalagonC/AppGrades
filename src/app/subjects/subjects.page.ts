import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { Session } from '../model/session.model';
import { Teacher } from '../model/teacher.model ';
import { JsonService } from '../services/json.service';
import { SessionService } from '../services/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  todos: any[];
  pageOfItems: any[];

  constructor(private sessionService: SessionService, private jsonService: JsonService,
    private router: Router, private alertService: AlertService, private http: HttpClient) {
  }

  plans: string[] = ['Ingeniería de sistemas'];
  periods: string[] = ['2021-1', '2021-Intersemestral', '2021-2'];
  teachers: Teacher[];
  session: Session;
  courses: string[] = ['Desarrollo web'];
  color = 'primary';


  ngOnInit() {
    this.session = this.sessionService.getSessionLogged();
    this.getTeachers();
    this.getSubjects();
  }

  getTeachers() {
    try {
      this.jsonService.getTeachers().subscribe((data) => {
        this.teachers = data;
      });
    } catch (error) {
      console.log('Error->', error);
    }
  }

  getSubjects() {
    try {
      this.jsonService.getSubjectByCode(this.session.user.code).subscribe((data) => {
        this.todos = data;
      });
    } catch (error) {
      console.log('Error->', error);
    }
  }



  saveCourse(plan, course, teacher, period) {
    //this.alertService.opensweetalertcst("Se creara curso")
    if (plan == null || course == null || teacher == null || period == null)
      alert("Por favor ingresa todos tus datos")
    const date = new Date();
    const timestamp = date.getTime();
    try {
      this.jsonService.saveCourse(plan, course, teacher, period, timestamp, true).subscribe((data) => {
        this.alertService.successfulAlert("Curso creado exitosamente")
      });
    } catch (error) {
      console.log('Error->', error);
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}


