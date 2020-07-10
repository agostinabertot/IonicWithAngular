import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController ) {}

//el async transforma el medoto o funcion en una PROMESA
async  agregarLista(){
 
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          //handler es la funcion que se va a disparar cuando se haga click en el boton cancelar
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            // si se apreta el boton de crear lista y se le puso un nombre se ejecuta lo siguiente
            if(data.titulo.length != 0) {
             const listaId =  this.deseosService.crearLista(data.titulo);
           
              this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            }
          }
        }
      ]
    });

   alert.present();
  
}

}
