import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowGradesPage } from './show-grades.page';

const routes: Routes = [
  {
    path: '',
    component: ShowGradesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowGradesPageRoutingModule {}
