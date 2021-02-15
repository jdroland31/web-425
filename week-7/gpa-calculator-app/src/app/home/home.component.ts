/*============================================;
Title: Exercise 7.3 - Form Validation;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of validation with reactive forms;
===========================================*/

// This file defines the home component.

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  transcriptForm: FormGroup;

// The constructor creates a new ITranscript.
  constructor(private fb: FormBuilder) {
    this.transcriptEntry = {} as ITranscript;
  }

  // Here we are replacing the original template form with a reactive form.
  // We set a validation requirement on course and grade.
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required]
    })
  }


  get form() { return this.transcriptForm.controls; }

// This function replaces saveEntry(). It creates a submit event listener that updates course and grade values.
  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });

    event.currentTarget.reset();
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
