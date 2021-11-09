import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreregistroPageRoutingModule } from './preregistro-routing.module';

import { PreregistroPage } from './preregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreregistroPageRoutingModule
  ],
  declarations: [PreregistroPage]
})
export class PreregistroPageModule {}
