import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowGradesPageRoutingModule } from './show-grades-routing.module';

import { ShowGradesPage } from './show-grades.page';
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowGradesPageRoutingModule
  ],
  declarations: [ShowGradesPage, NavMenuComponent]
})
export class ShowGradesPageModule {}
