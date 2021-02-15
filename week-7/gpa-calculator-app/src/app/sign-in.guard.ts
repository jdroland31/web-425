/*============================================;
Title: Exercise 7.3 - Form Validation;
Author: Professor Krasso;
Date: 2/14/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of validation with reactive forms;
===========================================*/

//This file acts as a route guard for the application, rerouting a user who is not signed in to the sign in page.

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //If the user attempts navigation we check to see if they are signed in. If not we send them to the sign-in page.
      const sessionUser = this.cookieService.get('session_user');
      if(sessionUser){
        return true;
      }
      else{
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }

}
