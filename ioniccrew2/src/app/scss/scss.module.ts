import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScssPageRoutingModule } from './scss-routing.module';

import { ScssPage } from './scss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScssPageRoutingModule
  ],
  declarations: [ScssPage]
})
export class ScssPageModule {}
