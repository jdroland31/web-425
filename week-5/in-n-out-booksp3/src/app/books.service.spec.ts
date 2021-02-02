/*============================================;
Title: Exercise 5.3 - Data Tables;
Author: Professor Krasso;
Date: 2/1/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of using data tables with Angular Material;
===========================================*/

// This file serves as the specification for the Books service.

import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
