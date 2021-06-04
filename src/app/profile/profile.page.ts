import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { SessionService } from '../services/session.service';
import { Session } from '../model/session.model';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public modalController: ModalController, private routerOutlet: IonRouterOutlet, 
    private sessionService : SessionService, private router: Router) { }

  session: Session;

  ngOnInit() {
    
    this.session = this.sessionService.getSessionLogged();
    if(null == this.session){
      this.logOut;
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: UpdateProfileComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  logOut(){
    this.sessionService.setSessionLoggedOut();
    this.router.navigate(['login']);
    
  }

}
