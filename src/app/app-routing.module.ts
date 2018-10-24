import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { TodolistComponent }  from './todolist/todolist.component';
import { NewitemComponent }  from './newitem/newitem.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/item', pathMatch: 'full' },
  { path: 'item', component: TodolistComponent },
  { path: 'newitem', component: NewitemComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
