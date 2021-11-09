import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.page.html',
  styleUrls: ['./carreras.page.scss'],
})
export class CarrerasPage implements OnInit {

  constructor(public alertController: AlertController) {}

  audio(carrera){
    let sonido=new Audio();
    sonido.src=carrera.audio;
    sonido.load();
    sonido.play();
    console.log(carrera);
  }

  async Alerta(carrera) {
    const alert = await this.alertController.create({
      header: carrera.nombre,
      message: carrera.texto,
      buttons: ['OK'],

    },
    );
  
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  carreras = [
    {
      nombre:"Licenciatura en Matematicas",
      imagen:'assets/lm.jpeg',
      audio:'assets/LM.mp3',
      texto: "Se busca que al salir un matematico tenga el conocimiento pleno en las ciencias matematicas, que sea capaz de trabajar y dar solucion a diversos problemas aplicados de la comunidad"
    },
    {
      nombre:"Licenciatura en Fisica",
      imagen: 'assets/lf.jpeg',
      audio:'assets/LF.mp3',
      texto: "Tratamos de formar profesionales que esten preparados en la fisica, y que con esto puedan participar en desarrollo cientifico, tecnologico y en investigacion para la sociedad"
    },
    {
      nombre:"Licenciatura en Actuaria",
      imagen: 'assets/la.jpeg',
      audio:'assets/LA.mp3',
      texto: "Un actuario es alguien con amplios conocimientos matematicos y de estadistica, su funcion principal es el analisis de riesgos economicos, todo el conocimiento necesario para implementarlo se enseña en nuestra institucion"
    },
    {
      nombre:"Licenciatura en Ciencias Computacionales",
      imagen: 'assets/lcc.jpeg',
      audio:'assets/LCC.mp3',
      texto: "Esperamos que al salir, un lcc sea capas de desarrollar e implementar sus conocimientos en computacion para poder solucionar diversos problemas en el area de economia y social a traves de desarrollo de software"
    },
    {
      nombre:"Licenciatura en Multimedia y Animacion Digital",
      imagen: 'assets/lmad.jpeg',
      audio:'assets/LMAD.mp3',
      texto: "Formar profesionistas capaces de diseñar aplicaciones enfocadas a cubrir necesidades de la industria del arte digital y medios interactivos, haciendo uso de herramientas digitales como la programacion y arte gráfico, para los sectores público y privado."
    },
    {
      nombre:"Licenciatura en Seguridad en T.I ",
      imagen: 'assets/lsti.jpeg',
      audio:'assets/LSTI.mp3',
      texto: "Nos dedicamos a formar personal profesional que tenga sentido humanista, creativo e innovador, capaz de aplicarlo de una manera profesional y buscar la seguridad y protecion de inofrmacion de las diversas instituciones que lo necesiten"
    },
  ]


  ngOnInit() {
  }

}
