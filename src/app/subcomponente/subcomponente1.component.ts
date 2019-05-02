import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'subcomponente1',
  template: '<input type="text" id="area1" value="{{entrada1}}" />'+
        '<button (click)="copiaal0()" class="btn btn-secondary" >-> 0</button>'+
        '<button (click)="copiaal2()" class="btn btn-warning" >-> 2</button>'+
        '<button (click)="borrartexto()" class="btn btn-danger"  >Limpiar</button>',
})
export class Subcomponente1Component  {

  textarea = document.querySelector('#area1');
  @Input() entrada1: string;
  @Output() emisor0 = new EventEmitter<string>();
  @Output() emisor2 = new EventEmitter<string>();

  ngOnInit() {
    console.log('Subcomponente1Component::entrada1 ' + this.entrada1);
  }

  copiaal0() {
    let t = document.querySelector('#area1');
    console.log('Subcomponente1Component::copiaal0 ' + t.value);
    this.emisor0.emit(t.value);
  }

  copiaal2() {
    let t = document.querySelector('#area1');
    console.log('Subcomponente1Component::copiaal2 ' + t.value);
    this.emisor2.emit(t.value);
  }

  borrartexto() {
      let t = document.querySelector('#area1');
      t.value = '';
  }

}
