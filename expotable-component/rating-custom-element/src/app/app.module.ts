import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RatingComponent } from './rating.component';
import {Injector} from "@angular/core"
import {createCustomElement} from "@angular/elements"

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [RatingComponent]

})
export class AppModule {

  constructor(private injector: Injector) {
    const component = createCustomElement(RatingComponent, {injector})
    customElements.define('mt-rating', component)
  }
  ngDoBootstrap(){

  }

}
