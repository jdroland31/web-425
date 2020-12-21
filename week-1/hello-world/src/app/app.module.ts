/**
 * Title: Assignment 1.3
 * Author: Professor Richard Krasso
 * Date: 12/21/2020
 * Modified By: Jonathan Roland
 * Description: basic Hello World in Angular
**/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
