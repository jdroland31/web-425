/**
 * Title: Assignment 1.3
 * Author: Professor Richard Krasso
 * Date: 12/21/2020
 * Modified By: Jonathan Roland
 * Description: basic Hello World in Angular
**/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //use custom message and variable name
  myWorld = "You are now in Jonathan Roland's world!";
}
