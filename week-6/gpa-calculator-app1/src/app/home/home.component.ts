/*============================================;
Title: Exercise 6.3 - Layouts;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of layout inheritance;
===========================================*/

// This file defines the home component.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
