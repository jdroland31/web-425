/*============================================;
Title: Exercise 3.3 - Passing Data to Routes, Part 2;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program further demonstrates an understanding of passing data to routes;
===========================================*/

//This file acts as the constructor for the sign-in component

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  //This function provides the isLoggedIn status to the router when the user navigates to the home route.
  signin(){
    this.isLoggedIn = true;

    this.router.navigate(['/home'],{queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
