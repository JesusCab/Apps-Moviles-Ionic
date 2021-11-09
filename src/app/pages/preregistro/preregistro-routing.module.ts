import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreregistroPage } from './preregistro.page';

const routes: Routes = [
  {
    path: '',
    component: PreregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreregistroPageRoutingModule {}
