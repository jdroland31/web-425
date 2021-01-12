/*============================================;
Title: Assignment 2.4 - Composer App;
Author: Professor Krasso ;
Date: 1/11/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of both navigation using Angular router and data binding;
===========================================*/

//Here we import the needed components.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//here we set the routes for the components composer-list, contact and about.
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
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
