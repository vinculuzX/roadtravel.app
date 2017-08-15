import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FrontComponent} from './front.component'
import {HomePageComponent} from './home.page/homepage.component'
import {EventPageComponent} from './event.page/eventpage.component'
import {EventsPageComponent} from './events.page/eventspage.component'
import {PartnershipPageComponent} from './partnership.page/partnershippage.component'
import {ContactPageComponent} from './contact.page/contactpage.component'

const FrontRouter: Routes = [
  {path:'', component:FrontComponent , children:[
    {path:'',component:HomePageComponent},
    {path:'event/:eventid',component:EventPageComponent},
    {path:'events',component:EventsPageComponent},
    {path:'becameapartner',component:PartnershipPageComponent},
    {path:'contact',component:ContactPageComponent}

  ]}
];


@NgModule({
  imports:[RouterModule.forRoot(FrontRouter)],
  exports:[RouterModule]

})

export class FrontRouting{}
