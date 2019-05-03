import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RepartidorService {

  repartidor: any = new Subject<any>();

  constructor() { }

  mensaje(): any {
    return 'mensaje estatico';
  }

  buzon(): Observable<any> {
    return this.repartidor.next('mensaje en movimiento');
  }

}