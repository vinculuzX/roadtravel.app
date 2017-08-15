import { Injectable } from '@angular/core';
import {Http , Headers , Response} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'


@Injectable()
export class DataSourceService {
  private url:string = "https://api.mlab.com/api/1/databases/"
  private database:string = "roadtravel_dev"
  private collections:string = "events"
  private token:string = "TABEtV5eHWz9YNwYJIg3t6HIflYBr7FY"
  constructor(private http:Http) {  }

  getAll(){
    var json = this.url + this.database + '/collections/'+ this.collections +'/?apiKey=' + this.token
    return this.http
      .get( json ,{headers:this.getHeaders()})
      .map((res: Response) => res.json());
  }
  // getEvent(eventId:string){ 
  //   var json = this.url + this.database + '/collections/'+ this.collections +'/?apiKey=' + this.token
  //   return this.http
  //     .get( json ,{headers:this.getHeaders()})
  //     .map((res: Response) => res.json())
  //     .filter((value) => value._id['$oid'] === eventId  )
  //
  // }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}
