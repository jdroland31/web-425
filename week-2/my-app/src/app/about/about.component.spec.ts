/*============================================;
Title: Assignment 2.2 - Navigation;
Author: Professor Krasso ;
Date: 1/11/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates navigation using Angular router;
===========================================*/


//This file imports basic component structure from core and constitutes a new About Component.

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
