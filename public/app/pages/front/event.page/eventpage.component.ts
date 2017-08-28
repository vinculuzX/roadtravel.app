import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {DataSourceService} from '../../../providers/datasource.service'

import { Meta } from '@angular/platform-browser';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/concatMap'
@Component({
  templateUrl: 'eventpage.component.html',
})
export class EventPageComponent implements OnInit {
  private _eventId:any
  private _title:any
  private event:any
  constructor(private _activatedrouter:ActivatedRoute,private _datasource:DataSourceService,private _meta:Meta){
      // taking params
      this._activatedrouter.params.subscribe((param)=>{this._eventId = param['eventid']})
      this._activatedrouter.queryParamMap.subscribe((queryparams)=>{this._title = queryparams.get('title')})
}

  ngOnInit() {
    // developing meta tag
    this._meta.addTag({property:'og:url',content:'www.roadtravel.me/' + this._eventId})
    this._meta.addTag({property:'og:title',content:this._title})
    //show data event
    this.getEventData()
  }
  private getEventData(){
    this.getEvent().subscribe(result => {
      this.event = result
    })
  }
  private getEvent(){
    return this._datasource.getAll()
          .concatMap(res => res)
          .filter(value => value['_id']['$oid'] === this._eventId)
  }
  ngOnDestroy(){

  }

}
