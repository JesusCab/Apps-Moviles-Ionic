import { Component, OnInit } from '@angular/core';
import { EmailComposer} from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-preregistro',
  templateUrl: './preregistro.page.html',
  styleUrls: ['./preregistro.page.scss'],
})
export class PreregistroPage implements OnInit {
  
  Nombre:'';
  Comment:'';
  Correo:'';
  Carrera:'';


  submit(){
    this.sendform();
  }

  sendform(){
    const email = {
      to: 'jonhyge@hotmail.com',
      subject: 'Informacion Acerca de Carreras',
      body:'Nombre: '+this.Nombre+ '<br>Correo: '+this.Correo+'<br>Carrera:'+this.Carrera+
      '<br>Comentario: '+this.Comment+'',
      app: "Gmail",
      isHtml: true
    }
    this.composer.open(email);
  }
  constructor(public composer:EmailComposer)
   {

   }
  ngOnInit() {
  }

}
