import { Component, OnInit } from '@angular/core'

import {Router} from '@angular/router'

import {DataSourceService} from '../../../providers/datasource.service'

import 'rxjs/add/operator/map'

@Component({
  templateUrl: 'eventspage.component.html',
})
export class EventsPageComponent implements OnInit {
  private events:any
  private events_close:any
  // private dataUrl = '../../../api/events.json';
  constructor(private _datasource:DataSourceService,private _router:Router) {  }
  ngOnInit() {
    this.showDataEvents()
  }

  private showDataEvents(){
    this.getDataEventsPublished().subscribe(events => {
      this.events = events
    })
    this.getDataEventsClosed().subscribe(events =>{
      this.events_close = events
    })
  }

  private getDataEventsPublished(){
    return this._datasource.getAll()
        .flatMap(s => s)
        .filter (s => s['status'] === 'published')
        .map(s=>s).toArray()
  }
  private getDataEventsClosed(){
    return this._datasource.getAll()
        .flatMap(s => s)
        .filter (s => s['status'] === 'closed')
        .take(6)
        .map(s=>s).toArray()
  }
  private openEvent(eventId:string){
    this._router.navigate(['event',eventId])
  }
}
