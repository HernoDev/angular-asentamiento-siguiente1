import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'subcomponente2',
  template: '<input type="text" id="area2" value="{{entrada2}}" />'+
        '<button (click)="copiaal0()" class="btn btn-secondary" >-> 0</button>'+
        '<button (click)="copiaal1()" class="btn btn-primary" >-> 1</button>'+
        '<button (click)="borrartexto()" class="btn btn-danger"  >Limpiar</button>',
})
export class Subcomponente2Component implements OnInit {

  textarea = document.querySelector('#area2');
  @Input() entrada2: string;
  @Output() emisor0 = new EventEmitter<string>();
  @Output() emisor1 = new EventEmitter<string>();

  ngOnInit() {
    console.log('Subcomponente2Component::entrada2 ' + this.entrada2);
  }

  copiaal0() {
    let t = document.querySelector('#area2');
    console.log('Subcomponente2Component::copiaal0 ' + t.value);
    this.emisor0.emit(t.value);
  }

  copiaal1() {
    let t = document.querySelector('#area2');
    console.log('Subcomponente2Component::copiaal1 ' + t.value);
    this.emisor1.emit(t.value);
  }

  borrartexto() {
      let t = document.querySelector('#area2');
      t.value = '';
  }

}