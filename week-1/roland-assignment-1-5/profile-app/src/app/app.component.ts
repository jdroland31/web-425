/**
 * Title: Assignment 1.5
 * Author: Professor Richard Krasso
 * Date: 12/21/2020
 * Modified By: Jonathan Roland
 * Description: demonstration of Angular components
**/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //custom 'assignment' variable with string type. Used in app.component.html
  assignment: string = "Assignment 1.5 - Components"
}
