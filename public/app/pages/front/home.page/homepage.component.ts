import { Component, OnInit } from '@angular/core';

import {DataSourceService} from '../../../providers/datasource.service'

@Component({
  templateUrl: 'homepage.component.html',
})
export class HomePageComponent implements OnInit {
  private events:any;
  constructor(private _datasource:DataSourceService) {  }
  ngOnInit() {
    this.getDataEventsPublished().subscribe((event)=>{
      this.events = event
    })
  }
  private getDataEventsPublished(){
    return this._datasource.getAll()
          .flatMap(s => s)
          .filter (s => s['status'] === 'published')
          .take(3)
          .map(s=>s).toArray()
  }

}
