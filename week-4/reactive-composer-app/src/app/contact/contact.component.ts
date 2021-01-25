/*============================================;
Title: Exercise 4.3 - Handling Events with Observables;
Author: Professor Krasso;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of observables;
===========================================*/

//This files acts as the constructor for the contact component.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
