/*============================================;
Title: Assignment 2.4 - Composer App;
Author: Professor Krasso ;
Date: 1/11/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of both navigation using Angular router and data binding;
===========================================*/

// This file performs the core work of importing the Component class from core and setting the app up for export.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'composer-app';
}
