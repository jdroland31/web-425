/*============================================;
Title: Exercise 3.4 - Guarding Routes;
Author: Professor Krasso ;
Date: 1/18/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates route guarding;
===========================================*/

//This file acts is a guard utilized by the home route to ensure a user is logged in.

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  //Here we add the router to the guards constructor.
  constructor(private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = next.queryParams.isLoggedIn;
    // Here we check the value of isLoggedIn, taken from the query parameters.
    if(isLoggedIn){
      return true;
    }
    else{
      //If the user is not logged in, they will be navigated back to the sign-in page.
      this.router.navigate(['/']);
      return false;
    }
  }

}
