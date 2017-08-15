import { Component, OnInit } from '@angular/core';
import {Http,Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  templateUrl: './front.component.html',
})
export class FrontComponent implements OnInit {
  private items:any
  private apiUrl:string = '../../../api/nav.json'
  constructor(private _http: Http) {  }
  ngOnInit():void {
    this.getDatafile().subscribe(items=>{
      this.items = items
    })
  }
  private getDatafile(){
    return this._http.get(this.apiUrl)
    .map((res:Response) => res.json().items)
  }
}
