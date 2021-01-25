/*============================================;
Title: Exercise 4.2 - Inversion of Control and Dependency Injection;
Author: Professor Krasso ;
Date: 1/24/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of dependency injection;
===========================================*/

// This files serves the specifications of the composer service

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
