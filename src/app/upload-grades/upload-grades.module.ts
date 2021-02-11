import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadGradesPageRoutingModule } from './upload-grades-routing.module';

import { UploadGradesPage } from './upload-grades.page';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadGradesPageRoutingModule
  ],
  declarations: [UploadGradesPage, NavMenuComponent]
})
export class UploadGradesPageModule {}
