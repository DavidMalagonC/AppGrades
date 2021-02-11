import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { NavMenuComponent } from '../nav-menu/nav-menu.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  exports: [NavMenuComponent],
  declarations: [ProfilePage, NavMenuComponent]
})
export class ProfilePageModule { }
