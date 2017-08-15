import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Injectable()
export class CommonSourceService {
  constructor(private _activatedroute:ActivatedRoute) {  }

  getParams(param:string){
    return this._activatedroute.params[param]
  }
}
