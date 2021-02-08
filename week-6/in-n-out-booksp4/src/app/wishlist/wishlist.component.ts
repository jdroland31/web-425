/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

//This file serves as the template for the wishlist component.

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items:Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }
  //This function adds an IWishlistItem to an array of the same type.
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
