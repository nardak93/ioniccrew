import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScssPage } from './scss.page';

const routes: Routes = [
  {
    path: '',
    component: ScssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScssPageRoutingModule {}
