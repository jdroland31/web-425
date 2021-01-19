/*============================================;
Title: Exercise 3.3 - Passing Data to Routes, Part 2;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program further demonstrates an understanding of passing data to routes;
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

  //The isLoggedIn variable is used to determine if the user is logged in.
  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute) {
    //Here we examine the query parameters for the value of isLoggedIn
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'))
  }

  ngOnInit(): void {
  }

}
