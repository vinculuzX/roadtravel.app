import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {DataSourceService} from '../../../providers/datasource.service'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/concatMap'
@Component({
  templateUrl: 'eventpage.component.html',
})
export class EventPageComponent implements OnInit {
  private _eventId:any
  private event:any
  constructor(private _activatedrouter:ActivatedRoute,private _datasource:DataSourceService) {  }

  ngOnInit() {
    //parameters
    this._activatedrouter.params.subscribe((param)=>{
      this._eventId = param['eventid']
    })
    //query result
    this.getEvent().subscribe(result => {
      this.event = result
    })
  }
  private getEvent(){
    return this._datasource.getAll()
          .concatMap(res => res)
          .filter(value => value['_id']['$oid'] === this._eventId)
  }

}
