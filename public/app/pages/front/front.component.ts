import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map'
@Component({
  templateUrl: './front.component.html',
})
export class FrontComponent implements OnInit {
  private items:any
  public nav = [
    {
      title:'Eventos',
      link:'/events'
    },
    {
      title:'Seja nosso Parceiro',
      link:'/becameapartner'
    },
    {
      title:'Contato',
      link:'/contact'
    },

  ]
  constructor() {  }
  ngOnInit():void {

  }
}
