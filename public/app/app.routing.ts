import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

import {AdminComponent} from './pages/admin/admin.component'
import {FrontComponent} from './pages/front/front.component'

const AppRouter: Routes  = [
    {path:'',component:FrontComponent},
    {path:'admin',component:AdminComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(AppRouter, { enableTracing: false })],
  exports:[RouterModule]
})
export class AppRoutingModule{}
