import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Noticias',
      url: '/menu/Noticias'
    },
    {
      title: 'Carreras',
      url: '/menu/Carreras'
    },
    {
      title: 'Contacto',
      url: '/menu/Contacto'
    },
    {
      title: 'Acerca',
      url: '/menu/Acerca'
    },
    {
      title: 'Preregistro',
      url: '/menu/Preregistro'
    }
  ]

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;})
   }

  ngOnInit() {
  }

}
