import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadGradesPage } from './upload-grades.page';

const routes: Routes = [
  {
    path: '',
    component: UploadGradesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadGradesPageRoutingModule {}
