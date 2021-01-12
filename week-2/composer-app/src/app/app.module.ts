/*============================================;
Title: Assignment 2.4 - Composer App;
Author: Professor Krasso ;
Date: 1/11/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of both navigation using Angular router and data binding;
===========================================*/

// Here we import needed modules including composer list, contact and about.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//Here we make necessary declarations and imports
@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
