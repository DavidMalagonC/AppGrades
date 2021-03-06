import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GradesPageRoutingModule } from './grades-routing.module';

import { GradesPage } from './grades.page';
import { NavMenuComponent } from "../nav-menu/nav-menu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GradesPageRoutingModule,
  ],
  
  declarations: [GradesPage, NavMenuComponent]
})
export class GradesPageModule {}
