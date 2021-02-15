/*============================================;
Title: Exercise 7.3 - Form Validation;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of validation with reactive forms;
===========================================*/

//This service allows a given student ID to be checked against a static array of student ID values for purposes of signing in.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007,1008,1009,1010,1011,1012];
  }

  //This function returns true if the submitted student id matches one in the studentIds array.
  validate(studentId: number){
    return this.studentIds.some(id=>id===studentId);
  }
}
