/*============================================;
Title: Assignment 3.2 - Passing Data to Routes, Part 1;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data to routes;
===========================================*/

//This file acts as the constructor for the About component.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
