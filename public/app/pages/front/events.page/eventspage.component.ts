import { Component, OnInit } from '@angular/core'

import {Router} from '@angular/router'

import {DataSourceService} from '../../../providers/datasource.service'

import 'rxjs/add/operator/map'

@Component({
  templateUrl: 'eventspage.component.html',
})
export class EventsPageComponent implements OnInit {
  private events:any;
  // private dataUrl = '../../../api/events.json';
  constructor(private _datasource:DataSourceService,private _router:Router) {  }
  ngOnInit() {
    this.getDataEvents()
  }

  private getDataEvents(){
    this._datasource.getAll().subscribe( source =>{
      this.events = source
      console.log(this.events)
    })
  }
  private openEvent(eventId:string){
    this._router.navigate(['event',eventId])
  }
}
