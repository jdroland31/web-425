/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

// This interface defines and exports an IBook class which describes a book.

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
