import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RepartidorService {

  repartidor: any = new Subject<any>();

  constructor() { }

  actualizar(): any {
    return 'completado desde adentro';
  }
}