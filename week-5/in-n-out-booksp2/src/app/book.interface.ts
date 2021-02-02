/*============================================;
Title: Exercise 5.3 - Data Tables;
Author: Professor Krasso;
Date: 2/1/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of using data tables with Angular Material;
===========================================*/

// This interface defines and exports an IBook class which describes a book.

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
