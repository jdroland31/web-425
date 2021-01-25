/*============================================;
Title: Assignment 4.2 - Inversion of Control and Dependency Injection;
Author: Professor Krasso ;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of dependency injection;
===========================================*/


//This file acts as the constructor for the Composer List Component.

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

    composers: Array<IComposer>;

    constructor(private ComposerService: ComposerService) {
      this.composers = this.ComposerService.getComposers();
    }

  ngOnInit(): void {
  }

}
