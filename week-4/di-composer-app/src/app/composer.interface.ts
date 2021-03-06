/*============================================;
Title: Exercise 4.2 - Inversion of Control and Dependency Injection;
Author: Professor Krasso ;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of dependency injection;
===========================================*/


// Here we define and export the IComposer interface.
export interface IComposer {
  composerId: number;
  fullName: string;
  genre: string;
}
