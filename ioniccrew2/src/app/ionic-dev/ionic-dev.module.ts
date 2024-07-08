import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicDevPageRoutingModule } from './ionic-dev-routing.module';

import { IonicDevPage } from './ionic-dev.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicDevPageRoutingModule
  ],
  declarations: [IonicDevPage]
})
export class IonicDevPageModule {}
