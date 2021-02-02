/*============================================;
Title: Exercise 5.3 - Data Tables;
Author: Professor Krasso;
Date: 2/1/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of using data tables with Angular Material;
===========================================*/

// This file defines the Book List component.

import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService} from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  //The book list component imports the observable array IBook from the book interface.
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn','title','numOfPages','authors'];
  book: IBook;
  //Here we use dependency injection to access the BooksService.
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }
  //This function allows us to log a given book (identified by isbn) to the console.
  showBookDetails(isbn:string){
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
