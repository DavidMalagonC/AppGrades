import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SessionService } from './session.service';
import { Session } from '../model/session.model';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';
import { Subject } from '../model/subject.model';
import { User } from '../model/user.model';
import { Grade } from '../model/grade.model';


@Injectable({
  providedIn: 'root'
})

export class JsonService {

  constructor(private http: HttpClient, public sessionService: SessionService) { }

  //  endpoint_back = "http://localhost:3000";
  endpoint_back = "https://bk-proyecto-notas.herokuapp.com"

  getJson(url: string) {
    return this.http.get(url);
  }

  login(latitud, longitud, email, password): Observable<User> {
    var request = { latitud, longitud, email, password }
    console.log(request);
    return this.http.post<User>(this.endpoint_back + "/perfil/usuario/signin", request);
  }

  uploadGrade(id_grade, grade_value, name, date, code, code_subject): Observable<any> {
    var request = { id_grade, grade_value, name, date }
    console.log(request);
    return this.http.post<any>(this.endpoint_back + "/student/grade/" + code + "/" + code_subject, request);
  }

  getStudentsBySubject(subject): Observable<Student[]> {
    return this.http.get<Student[]>(this.endpoint_back + "/course/students/" + subject);
  }

  getGradesBySubject(subject, code): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.endpoint_back + "/student/grade/" + code + "/" + subject);
  }

  getAverageByStudent(code): Observable<any> {
    return this.http.get<any>(this.endpoint_back + "/student/grade/average/" + code);
  }

  getAverageSubjectsByStudent(code): Observable<any> {
    return this.http.get<any>(this.endpoint_back + "/student/list/average/grade/" + code);
  }

  getSubjectsByTeacher(code): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.endpoint_back + "/perfil/subjects/" + code);
  }

  sendMail(email, subject, message): Observable<string> {
    var request = { email, subject, message };
    return this.http.post<string>(this.endpoint_back + "/perfil/sendEMail/", request);
  }

  postJson(url: string, formData) {

    if (url == null) {
      url = this.endpoint_back;
    }

    let s: Session = this.sessionService.getSessionLogged();
    return this.http.post(url, formData);
  }

  register(url: string, email, password, name, lastname, code, degree): Observable<Session> {
    let request = {
      email, password, name, lastname, code, degree
    }
    if (url == null) {
      url = this.endpoint_back;
    }

    return this.http.post<Session>(url, request);
  }
  update(url: string, email, password, name, lastname, code, degree): Observable<Session> {
    let request = {
      email, password, name, lastname, code, degree
    }
    if (url == null) {
      url = this.endpoint_back;
    }

    return this.http.put<Session>(url, request);
  }
}