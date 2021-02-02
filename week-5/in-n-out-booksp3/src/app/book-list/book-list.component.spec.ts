/*============================================;
Title: Assignment 5.4 - Dialogs;
Author: Professor Krasso;
Date: 2/1/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of using Material dialogs;
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
