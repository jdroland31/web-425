/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

// This file defines the About component.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
