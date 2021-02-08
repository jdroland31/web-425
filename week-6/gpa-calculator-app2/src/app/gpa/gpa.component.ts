/*============================================;
Title: Assignment 6.4 - Input Properties;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of data transmission from parent to child components;
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
