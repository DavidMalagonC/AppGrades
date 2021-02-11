import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from '../model/grade.model';
import { Session } from '../model/session.model';
import { JsonService } from '../services/json.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-show-grades',
  templateUrl: './show-grades.page.html',
  styleUrls: ['./show-grades.page.scss'],
})
export class ShowGradesPage implements OnInit {

  constructor(private sessionService: SessionService, private jsonService: JsonService,
    private router: Router) { }

   subject;

   session: Session;

   grades: Grade[];

  ngOnInit() {
    this.session = this.sessionService.getSessionLogged();
    this.getGradesBySubject();
  }

  getGradesBySubject() {
    var url = this.router.parseUrl(this.router.url);

    this.subject = url.queryParams['subject'];
    try {
      this.jsonService.getGradesBySubject(url.queryParams['subjectCode'], this.session.user.code).subscribe((data) => {
        this.grades = data;
      });
    } catch (error) {
      console.log('Error->', error);
    }

  }


}
