/*============================================;
Title: Exercise 7.2 - Reactive Forms;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of reactive forms through implementation of a sign in form;
===========================================*/

// This file defines the gpa component.

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss']
})
export class GpaComponent implements OnInit {

  // @Input allows the gpa total to be shared with a child component.
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
