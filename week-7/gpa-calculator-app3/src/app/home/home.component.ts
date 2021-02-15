/*============================================;
Title: Exercise 7.2 - Reactive Forms;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of reactive forms through implementation of a sign in form;
===========================================*/

// This file defines the home component.

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /*
  These properties are needed for the GPA calculator to function.
  Each transcript entry has a name and grade.
  The selectable grades are static values a a normal grading scale.
  An array (transcriptEntries) holds each entered course.
  GPA total is the calculated result.
  */
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A','A-','B+','B','B-','C+','C','C-','D+','D','D-','F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

// The constructor creates a new ITranscript.
  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }
// This function saves the user's entry to the array and clears the entry for the next use.
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }
// This functions calculates the results.
  calculateResults() {
    let gpa: number = 0;
    for (let entry of this.transcriptEntries) {
      console.log(entry.grade)
      switch(entry.grade) {
        case 'A':
          console.log('its an a')
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }
    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }
// This function clears the entries array so the user can start over.
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
