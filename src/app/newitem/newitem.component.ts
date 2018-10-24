import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { item } from '../../_modelo/item';
import { MockItemsService } from "../_services/mock-items.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.css']
})
export class NewitemComponent implements OnInit {

  NewItemForm: FormGroup;
  constructor(private builder: FormBuilder,
              private service: MockItemsService,
              private router: Router) { 

    this.NewItemForm = this.builder.group(new item(""));

  }

  ngOnInit() {
  }

  onSubmit(){

    this.service.add(this.NewItemForm.value).subscribe(items =>{
    this.router.navigateByUrl("/item");
  });

  }



}
