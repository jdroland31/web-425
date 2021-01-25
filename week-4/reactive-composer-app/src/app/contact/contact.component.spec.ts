/*============================================;
Title: Exercise 4.3 - Handling Events with Observables;
Author: Professor Krasso;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of observables;
===========================================*/

// This files serves the specifications of the contact component

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
