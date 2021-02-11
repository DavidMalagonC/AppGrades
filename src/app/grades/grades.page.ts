import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Session } from '../model/session.model';
import { JsonService } from '../services/json.service';
import { Subject } from '../model/subject.model';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
})
export class GradesPage implements OnInit {

  constructor(private sessionService: SessionService, private jsonService: JsonService) { }

  session : Session;
  subjects: Subject[];
  
  ngOnInit() {
    this.session = this.sessionService.getSessionLogged();
    this.getSubjectsByTeacher(this.session.user.code);
  }

  getSubjectsByTeacher(code) {
    try {
      this.jsonService.getSubjectsByTeacher(code).subscribe((data) => {
        this.subjects = data;
        this.session.subject = this.subjects;
        this.sessionService.setSessionLoggedIn(this.session);

      });
    } catch (error) {
      console.log('Error->', error);
    }

  }

}
