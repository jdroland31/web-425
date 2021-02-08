/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
