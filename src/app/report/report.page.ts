import { Component, OnInit } from '@angular/core';
import { Session } from '../model/session.model';
import { Subject } from '../model/subject.model';
import { JsonService } from '../services/json.service';
import { SessionService } from '../services/session.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  constructor(private sessionService: SessionService, private jsonService: JsonService) {
    this.session = this.sessionService.getSessionLogged();
    this.getSubjectsByTeacher(this.session.user.code);
    this.getAverageByStudent(this.session.user.code);
    this.getAverageSubjectsByStudent(this.session.user.code);
   }

  session: Session;
  subjects: Subject[];
  average: any;
  averages: [{
    Materia,
    Promedio
  }]

  /**
 * The ChartJS Object
 * @var {any} chart
 */
  public chart: any = null;


  ngOnInit() {
    this.chart = new Chart('realtime', {
      type: 'bar',
      data: {
        labels: ["Promedio por semestre"],
        datasets: [
          {
            label: '1 semestre',
            fill: false,
            data: [31],
            backgroundColor: '#168ede',
            borderColor: '#168ede'
          },
          {
            label: '2 semestre',
            fill: false,
            data: [47],
            backgroundColor: '#a68ede',
            borderColor: '#168ede'
          },
          {
            label: '3 semestre',
            fill: false,
            data: [42],
            backgroundColor: '#dcffde',
            borderColor: '#168ede'
          }
        ],
      },

      options: {
        tooltips: {
          enabled: false
        },
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            fontColor: 'black'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: "black",
              suggestedMin: 0,
              suggestedMax: 50,
              stepSize: 10
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: "black",
              beginAtZero: true
            }
          }]
        }
      }
    });
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

  getAverageByStudent(code) {
    try {
      this.jsonService.getAverageByStudent(code).subscribe(data => {
        this.average = data.average;
      });
    } catch (error) {
      console.log('Error->', error);
    }
  }

  getAverageSubjectsByStudent(code) {
    try {
      this.jsonService.getAverageSubjectsByStudent(code).subscribe(data => {
        this.averages = data;
      });
    } catch (error) {
      console.log('Error->', error);
    }
  }

}
