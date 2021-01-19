/*============================================;
Title: Exercise 3.3 - Passing Data to Routes, Part 2;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program further demonstrates an understanding of passing data to routes;
===========================================*/

// This files serves the specifications of the my-image component
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImageComponent } from './my-image.component';

describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
