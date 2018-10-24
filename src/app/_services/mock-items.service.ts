import { Injectable } from '@angular/core';
import { AbstractItemsService } from "./abstract-items.service";
import { item } from '../../_modelo/item';
import {Observable, observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService {
  
  items:item[];
  constructor() { 
    super();
    this.items = [

      new item ("comprar carne"),
      new item ("comprar  verdura"),
      new item ("comprar carbon"),

    ]
  }

  getItems():Observable<item[]> { 

    return new Observable((observable) =>{
        observable.next(this.items);
        observable.complete();
    });

  };

  Remove(anItem: item): Observable<item[]>{
    return new Observable((observable) => {
      this.items = this.items.filter(item => item !== anItem);
      observable.next(this.items);
        observable.complete();
    })
    
  }

  add(anItem: item): Observable<item[]>{
    return new Observable((observable) => {
      this.items.push(anItem);
      observable.next(this.items);
      observable.complete();
    })
  }

}

