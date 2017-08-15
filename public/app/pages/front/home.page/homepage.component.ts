import { Component, OnInit } from '@angular/core';

import {DataSourceService} from '../../../providers/datasource.service'

@Component({
  templateUrl: 'homepage.component.html',
})
export class HomePageComponent implements OnInit {
  private events:any;
  constructor(private _datasource:DataSourceService) {  }
  ngOnInit() {
    this.getDataEvents().subscribe((event)=>{
      this.events = event
      console.log(event)
    })
  }

  private getDataEvents(){
    return this._datasource.getAll()
          .map(array => array.sort())  
  }

}
