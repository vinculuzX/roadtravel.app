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

    this.showDataEvents()
  }

  private showDataEvents(){
    this.getDataEvents().subscribe(events => {
      this.events = events
    })
  }

  private getDataEvents(){
    return this._datasource.getAll()
        .flatMap(s => s)
        .filter (s => s['status'] !== 'draft')
        .map(s=>s).toArray()
  }
  private openEvent(eventId:string){
    this._router.navigate(['event',eventId])
  }
}
