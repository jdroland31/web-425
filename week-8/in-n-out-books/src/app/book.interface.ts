/*============================================;
Title: Exercise 8.2 - Server-Side Communications;
Author: Professor Krasso;
Date: 2/22/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of API requests with HttpClientModule and HttpClient object;
===========================================*/

// This interface defines and exports an IBook class which describes a book.

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
