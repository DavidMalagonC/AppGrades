import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Session } from '../model/session.model';
import { JsonService } from '../services/json.service';
import { Subject } from '../model/subject.model';
import { Periods } from '../model/period.model';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
})
export class GradesPage implements OnInit {

  constructor(private sessionService: SessionService, private jsonService: JsonService) { }

  session: Session;
  subjects: Subject[];
  periods: Periods[] = [{ period: '2021-1' }, { period: '2020-2' }];

  ngOnInit() {
    this.session = this.sessionService.getSessionLogged();
    if (this.session.user.id_rol == 2) {
      this.periods = [{ period: '2021-1' }];

    }
    this.getSubjectsByTeacher( this.periods[0].period);
  }

  getSubjectsByTeacher(period) {
    try {
      this.jsonService.getSubjectsByTeacher(this.session.user.code, period).subscribe((data) => {
        this.subjects = data;
        this.session.subject = this.subjects;
        this.sessionService.setSessionLoggedIn(this.session);

      });
    } catch (error) {
      console.log('Error->', error);
    }

  }

}
