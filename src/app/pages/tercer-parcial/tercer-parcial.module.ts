import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercerParcialPageRoutingModule } from './tercer-parcial-routing.module';

import { TercerParcialPage } from './tercer-parcial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercerParcialPageRoutingModule
  ],
  declarations: [TercerParcialPage]
})
export class TercerParcialPageModule {}
