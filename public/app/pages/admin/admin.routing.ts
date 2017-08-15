import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import {AdminComponent} from './admin.component'

const AdminRouter : Routes = [
  { path: 'admin', component:AdminComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(AdminRouter)]
})

export class AdminRouting {}
