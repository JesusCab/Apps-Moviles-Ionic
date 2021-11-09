import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu', 
    component: MenuPage,
    children: [
      {
        path: 'Noticias',
        loadChildren: () => import ('../Noticias/Noticias.module').then( m => m.NoticiasPageModule)
      },
      {
        path: 'Carreras',
        loadChildren: () => import ('../Carreras/Carreras.module').then( m => m.CarrerasPageModule)
      },
      {
        path: 'Contacto',
        loadChildren: () => import ('../Contacto/Contacto.module').then( m => m.ContactoPageModule)
      },
      {
        path: 'Acerca',
        loadChildren: () => import ('../Acerca/Acerca.module').then( m => m.AcercaPageModule)
      },
      {
        path: 'Preregistro',
        loadChildren: () => import ('../Preregistro/Preregistro.module').then( m => m.PreregistroPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/Noticias'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
