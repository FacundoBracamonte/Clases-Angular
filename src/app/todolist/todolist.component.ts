import { Component, OnInit } from '@angular/core';
import { item } from "../../_modelo/item";
import { MockItemsService } from '../_services/mock-items.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  items:item[];
  constructor(private service:MockItemsService) { 
    this.service.getItems().subscribe(serviceItems =>{
      this.items = serviceItems;
    })
  };

  onRemove(anItem){
    this.service.Remove(item).subscribe(serviceItems => {
      this.items = serviceItems;
    });

  }

  ngOnInit() {
  }

}


