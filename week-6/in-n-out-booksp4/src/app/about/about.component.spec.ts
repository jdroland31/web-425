/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

// This file defines the About component specification.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
