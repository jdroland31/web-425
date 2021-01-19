/*============================================;
Title: Exercise 3.4 - Guarding Routes;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates route guarding;
===========================================*/

//This file acts as the constructor for the home component

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

}
