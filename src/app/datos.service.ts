import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DatosService {

  const datos : string = 'con ADdATOS';

  constructor() { }

  ngInit() {

  }

  getDatos(): string {
    return this.datos;
  }




}