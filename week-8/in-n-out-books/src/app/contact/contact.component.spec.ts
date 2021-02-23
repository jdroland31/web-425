/*============================================;
Title: Exercise 8.2 - Server-Side Communications;
Author: Professor Krasso;
Date: 2/22/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of API requests with HttpClientModule and HttpClient object;
===========================================*/

// This file defines the Contact component specification.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
