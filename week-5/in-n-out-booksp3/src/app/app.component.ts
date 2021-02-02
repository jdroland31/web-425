/*============================================;
Title: Assignment 5.4 - Dialogs;
Author: Professor Krasso;
Date: 2/1/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of using Material dialogs;
===========================================*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// The assignment variable is used in the constructor to identify the assignment.
  assignment: string;

  constructor(){
    this.assignment = 'Assignment 5.4 - Dialogs'
  }

}
