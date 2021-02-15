/*============================================;
Title: Exercise 7.2 - Reactive Forms;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of reactive forms through implementation of a sign in form;
===========================================*/

// This file defines the grade-summary component.

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss']
})
export class GradeSummaryComponent implements OnInit {
// @Input enables the grade and course values to be transmitted to a child component.
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
