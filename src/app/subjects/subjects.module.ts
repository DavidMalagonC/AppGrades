import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectsPageRoutingModule } from './subjects-routing.module';
import { SubjectsPage } from './subjects.page';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectsPageRoutingModule,
    JwPaginationModule 
  ],
  declarations: [SubjectsPage, NavMenuComponent]
})
export class SubjectsPageModule {}
