/*============================================;
Title: Exercise 7.2 - Reactive Forms;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of reactive forms through implementation of a sign in form;
===========================================*/

// This file acts as the specification for the sign in guard.

import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
