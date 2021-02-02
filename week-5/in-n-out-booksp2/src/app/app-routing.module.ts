/*============================================;
Title: Exercise 5.3 - Data Tables;
Author: Professor Krasso;
Date: 2/1/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of using data tables with Angular Material;
===========================================*/

// This file is used to set the routes for the application, including default, book list, contact and about.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
