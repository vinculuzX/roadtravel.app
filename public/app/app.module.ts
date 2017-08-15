import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'

import {AppComponent} from './app.component'

import {AppRoutingModule} from './app.routing'
import {AdminModule} from './pages/admin/admin.module'
import {FrontModule} from './pages/front/front.module'



@NgModule({
  imports: [
    BrowserModule,
    AdminModule,
    FrontModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
