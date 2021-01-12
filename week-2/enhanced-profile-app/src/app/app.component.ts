/*
Title: Assignment 2.3 - Data Binding
Author: Professor Richard Krasso
Date: 1/11/2021
Modified By: Jonathan Roland
Description: An enhanced version of the profile app from assignment 1.5 to demonstrate data binding
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //custom 'assignment' variable with string type. Used in app.component.html
  assignment: string = "Exercise 2.3 - Data Binding";
  //isLoggedIn variable defaulted to boolean true for use in login functionality.
  isLoggedIn: Boolean = true;
}
