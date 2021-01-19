/*============================================;
Title: Exercise 3.3 - Passing Data to Routes, Part 2;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program further demonstrates an understanding of passing data to routes;
===========================================*/

//This file acts as the constructor for the my-details component

import { Component, OnInit } from '@angular/core';
//This defines a Person object with full name, favorite food, favorite color and keywords.
export default class Person {

  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]
//This constructor method lets the full name, favorite food and favorite color be set.
  constructor(fullName: string,favoriteFood: string,favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
//This toString function allows outputting of name, food and color to the console for testing.
  toString(){
    console.log(`\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`);
  }

}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {
  //myProfile variable is assigned the person data type.
  myProfile: Person;
  constructor() {
    //Her I am creating a new instance of Person and passing in my own information.
    this.myProfile = new Person("Jonathan Roland","Steak Hibachi","Blue-green");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
