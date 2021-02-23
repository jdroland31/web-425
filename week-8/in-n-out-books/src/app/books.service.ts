/*============================================;
Title: Exercise 8.2 - Server-Side Communications;
Author: Professor Krasso;
Date: 2/22/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of API requests with HttpClientModule and HttpClient object;
===========================================*/

// This file provides the Books service for the application.

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//the BooksService class contains the logic to send a list of ISBNs to an HTTP client (Open Library API) and parse the return into a books object.
export class BooksService {
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  constructor(private http: HttpClient) {  }

  getBooks() {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }
}
