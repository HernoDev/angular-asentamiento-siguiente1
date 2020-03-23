import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DatosService} from './datos.service';
import { RepartidorService } from './repartidor.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'componenteprincipal',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  textarea = document.querySelector('#area0');
  desde0 : string;
  desde1 : string;
  desde2 : string;
  datos: DatosService;
  titulo : string;
  arribo : Observable<any>;

  constructor(public losdatos : DatosService, public reparto: RepartidorService){

  }

  ngOnInit( ) {
    this.desde1 = 'iniciado';
    this.desde2 = 'iniciado';
    this.titulo = this.losdatos.getDatos();
  }

  copiaal1() {
    let t = document.querySelector('#area0');
    this.desde1 = t.value;
  }

  copiaal2() {
    let t = document.querySelector('#area0');
    this.desde2 = t.value;
  }

  borrartexto(event) {
      let t = document.querySelector('#area0');
      t.value = '';
      t.value = this.reparto.mensaje();
this.desde1 =  'lo vemos';
      this.arribo = this.reparto.buzon;
      this.arribo.subscribe( valor => {
        this.desde1 =  valor;
      });
  }

  recibir0(message) {
      let t0 = document.querySelector('#area0');
      console.log('AppComponent::recibir0 ' + t0.value);
      t0.value = message;
  }

  recibir1(message) {
      console.log('AppComponent::recibir1 ');
      this.desde1 = message;
  }

  recibir2(message) {
      console.log('AppComponent::recibir2 ');
      this.desde2 = message;
  }



}
