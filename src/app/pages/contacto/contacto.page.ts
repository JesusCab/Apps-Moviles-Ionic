import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {LoadingController} from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage{

  constructor(private geolocation: Geolocation, private loadingCtrl: LoadingController) { 
  }
  ngOnInit(){
    this.loadmap();
  }
  async loadmap(){
    const loading=await this.loadingCtrl.create();
    loading.present();

    const rta=await this.geolocation.getCurrentPosition();
    const myLatLng={
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle:HTMLElement= document.getElementById('map');
    const map= new google.maps.Map(mapEle,{  
      center:myLatLng,
      zoom: 11
    });
    google.maps.event.addListenerOnce(map,'idle',()=>{
      loading.dismiss();

      const marker =new google.maps.Marker({
        position:{
        lat: 25.725507,
        lng: -100.315229
      },
      map: map,
      tittle: 'FCFM'});    

    });
}
}

