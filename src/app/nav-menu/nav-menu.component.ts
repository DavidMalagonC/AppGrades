import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs } from '@ionic/angular/directives/navigation/ion-tabs';
import { Session } from '../model/session.model';
import { JsonService } from '../services/json.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {


  selectedTab: string;

  constructor(private router: Router, private sessionService: SessionService, private jsonService: JsonService) { }
  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  profile = false;
  grades = false;
  report = false;
  session: Session;

  ngOnInit() {
    this.session = this.sessionService.getSessionLogged();
   }

  selectProfile() {
    this.profile = true;
  }
  selectGrades() {
    this.grades = true;
  }

  selectReport() {
    this.report = true;
  }


  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    alert(this.selectedTab + "dsadsd");
  }

}
