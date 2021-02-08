/*============================================;
Title: Exercise 6.3 - Layouts;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of layout inheritance;
===========================================*/

// This file defines the base-layout component.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
