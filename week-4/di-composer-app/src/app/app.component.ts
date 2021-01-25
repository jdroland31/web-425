/*============================================;
Title: Exercise 4.2 - Inversion of Control and Dependency Injection;
Author: Professor Krasso ;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of dependency injection;
===========================================*/

// This file performs the core work of importing the Component class from core and setting the app up for export.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'di-composer-app';
  assignment: string = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
