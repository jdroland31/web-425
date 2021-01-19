/*============================================;
Title: Exercise 3.3 - Passing Data to Routes, Part 2;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program further demonstrates an understanding of passing data to routes;
===========================================*/

// This file performs the core work of importing the Component class from core and setting the app up for export.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //custom 'assignment' variable with string type. Used in app.component.html
  assignment: string = "Exercise 3.3 - Passing Data to Routes, Part 2";

}
