import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componenteprincipal',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  textarea = document.querySelector('#area0');
  desde0 : string;
  desde1 : string;
  desde2 : string;

  ngOnInit() {
    this.desde1 = 'iniciado';
    this.desde2 = 'iniciado';
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
  }

  recibir0(event) {
      let t0 = document.querySelector('#area0');
      console.log('AppComponent::recibir0 ' + t0.value);
      t0.value = event;
  }

  recibir1(event) {
      console.log('AppComponent::recibir1 ');
      this.desde1 = event;
  }

  recibir2(event) {
      console.log('AppComponent::recibir2 ');
      this.desde2 = event;
  }



}
