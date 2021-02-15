/*============================================;
Title: Exercise 7.2 - Reactive Forms;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of reactive forms through implementation of a sign in form;
===========================================*/

// This file serves as the specification for the base-layout component.

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutComponent } from './base-layout.component';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
