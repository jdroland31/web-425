/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

// This file defines the Book List component.

import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService} from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

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
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  //This function allows us to log a given book (identified by isbn) to the console.
  showBookDetails(isbn:string){
    this.book = this.booksService.getBook(isbn);
    // Here we expand on this function from earlier, instantiating a dialogue component for the given book.
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);
    // If the user confirms they want to close the dialog, we destroy the instantiated dialog.
    dialogRef.afterClosed().subscribe(result=>{
      if(result==='confirm'){
        this.book = null;
      }
    });

  }

}
