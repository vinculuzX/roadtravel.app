import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import {HttpModule } from '@angular/http';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'


import {DataSourceService} from '../../providers/datasource.service'

import {FrontComponent} from './front.component'
import {HomePageComponent} from './home.page/homepage.component'
import {EventPageComponent} from './event.page/eventpage.component'
import {EventsPageComponent} from './events.page/eventspage.component'
import {PartnershipPageComponent} from './partnership.page/partnershippage.component'
import {ContactPageComponent} from './contact.page/contactpage.component'

import {FrontRouting} from './front.routing'

@NgModule({
  imports: [
    FrontRouting,
    CommonModule,
    HttpModule
  ],
  declarations: [
    FrontComponent,
    HomePageComponent,
    EventPageComponent,
    EventsPageComponent,
    PartnershipPageComponent,
    ContactPageComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DataSourceService],

})
export class FrontModule { }
