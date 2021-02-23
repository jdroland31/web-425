/*============================================;
Title: Exercise 8.2 - Server-Side Communications;
Author: Professor Krasso;
Date: 2/22/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of API requests with HttpClientModule and HttpClient object;
===========================================*/

//This file serves as the specification of the wishlist component.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
