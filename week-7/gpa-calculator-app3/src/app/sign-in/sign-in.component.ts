/*============================================;
Title: Exercise 7.2 - Reactive Forms;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of reactive forms through implementation of a sign in form;
===========================================*/

//This component builds a reactive sign in form.

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    //The id field loads blank when the sign in form is rendered.
    this.signinForm = this.fb.group({
      studentId: ''
    })
  }

  //This function calls the sign in service when the user submits their sign in form.
  onSubmit(){
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);
    //If the studentId is valid, we set the student ID in the session as a string and route the user to the home page.
    if(this.signinService.validate(studentId)){
      this.cookieService.set("session_user", studentId.toString(), 1);
      this.router.navigate(['/']);
    }
    //If the student ID is not valid, display an error message.
    else{
      this.errorMessage = 'The student ID you entered is invalid. Please try again.'
    }
  }

}
