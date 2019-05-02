import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Subcomponente1Component } from './subcomponente/subcomponente1.component';
import { Subcomponente2Component } from './subcomponente/subcomponente2.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Subcomponente1Component, Subcomponente2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
