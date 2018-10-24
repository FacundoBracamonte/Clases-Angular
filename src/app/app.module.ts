import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { NewitemComponent } from './newitem/newitem.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { MockItemsService } from "./_services/mock-items.service";

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NewitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [MockItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
