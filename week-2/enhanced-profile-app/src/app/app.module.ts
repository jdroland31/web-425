/*
Title: Assignment 2.3 - Data Binding
Author: Professor Richard Krasso
Date: 1/11/2021
Modified By: Jonathan Roland
Description: An enhanced version of the profile app from assignment 1.5 to demonstrate data binding
*/

//here we import the neccesary modules including my image and my details.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

//Here we declare imports and components.
@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
