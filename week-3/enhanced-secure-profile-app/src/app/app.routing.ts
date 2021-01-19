/*============================================;
Title: Exercise 3.4 - Guarding Routes;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates route guarding;
===========================================*/

// This file serves the routing needs of the application

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
//The SignInGuard is imported so it can be used by the home route.
import { SignInGuard } from './sign-in.guard';
//Here we match the default route to the sign in component and the home route to the home component
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    //The home route utilizes the SignInGuard via the canActive function.
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }
]
