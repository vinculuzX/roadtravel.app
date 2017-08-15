import { NgModule } from '@angular/core';

import {AdminRouting} from './admin.routing'

import {AdminComponent} from './admin.component'

@NgModule({
  imports: [
    AdminRouting
  ],
  declarations: [
    AdminComponent
  ],
  providers: [

  ]
})
export class AdminModule { }
