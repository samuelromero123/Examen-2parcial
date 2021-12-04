import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TercerParcialPage } from './tercer-parcial.page';

const routes: Routes = [
  {
    path: '',
    component: TercerParcialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TercerParcialPageRoutingModule {}
