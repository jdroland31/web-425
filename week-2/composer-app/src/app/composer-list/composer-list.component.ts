/*============================================;
Title: Assignment 2.4 - Composer App;
Author: Professor Krasso ;
Date: 1/11/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of both navigation using Angular router and data binding;
===========================================*/


//This file acts as the constructor for the Composer List Component.

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

//This constructor method lets the full name and genre be set.
  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

    //composer variable is assigned the person data type.
    composers: Array<Composer>;
    constructor() {
      //Here I am creating an array of composers and instantiating unique values.
      this.composers = [
        new Composer("Ludwig Van Beethoven","Classical"),
        new Composer("Johann Sebastian Bach","Classical"),
        new Composer("Wolfgang Amadeus Mozart","Classical"),
        new Composer("Johannes Brahms","Classical"),
        new Composer("Joseph Haydn","Classical"),
      ];
    }

  ngOnInit(): void {
  }

}
