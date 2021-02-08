/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

// This file provides the Books service for the application.

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;
// Here we instantiate an array of my favorite books.
  constructor() {
    this.books = [
      {
        isbn: '9780593099322',
        title: 'Dune',
        description: "A deluxe hardcover edition of Frank Herbert’s epic masterpiece—a triumph of the imagination and one of the bestselling science fiction novels of all time.",
        numOfPages: 688,
        authors: ['Frank Herbert']
      },
      {
        isbn: '0441783589',
        title: 'Starship Troopers',
        description: "In Robert A. Heinlein’s controversial Hugo Award-winning bestseller, a recruit of the future goes through the toughest boot camp in the Universe—and into battle against mankind’s most alarming enemy...",
        numOfPages: 263,
        authors: ['Robert A. Heinlein']
      },
      {
        isbn: '0765394855',
        title: "Old Man's War",
        description: "John Perry did two things on his 75th birthday. First he visited his wife’s grave. Then he joined the army.",
        numOfPages: 416,
        authors: ['John Scalzi']
      },
      {
        isbn: '0671741926',
        title: "The Mote in God's Eye",
        description: "First contact goes awry...",
        numOfPages: 592,
        authors: ['Larry Niven','Jerry Pournelle']
      },
      {
        isbn: '978-1941582756',
        title: 'Battletech: Decision at Thunder Rift',
        description: "Grayson Death Carlyle had been training to be a MechWarrior since he was 10 years old, but his graduation came sooner than expected...",
        numOfPages: 276,
        authors: ['William H. Keith Jr.']
      }
    ]
  }
// This function returns the books array from the constructor.
  getBooks(): Observable<IBook[]>{
    return of(this.books);
  }
// This function returns a specific book by isbn.
  getBook(isbn: string): IBook {
    for(let book of this.books){
      if(book.isbn === isbn) {
        return book;
      }
    }
  }

}
