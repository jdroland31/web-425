/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

// This file defines the Book List component specification.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
