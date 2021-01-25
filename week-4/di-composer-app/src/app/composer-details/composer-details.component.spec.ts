/*============================================;
Title: Exercise 4.2 - Inversion of Control and Dependency Injection;
Author: Professor Krasso ;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of dependency injection;
===========================================*/

// This files serves the specifications of the composer details component

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerDetailsComponent } from './composer-details.component';

describe('ComposerDetailsComponent', () => {
  let component: ComposerDetailsComponent;
  let fixture: ComponentFixture<ComposerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
