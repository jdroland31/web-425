/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

//This file serves as the specification for the wishlist create component.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCreateComponent } from './wishlist-create.component';

describe('WishlistCreateComponent', () => {
  let component: WishlistCreateComponent;
  let fixture: ComponentFixture<WishlistCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
