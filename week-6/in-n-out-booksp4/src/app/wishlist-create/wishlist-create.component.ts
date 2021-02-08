/*============================================;
Title: Assignment 6.2 - Input/Output Properties, Part 1;
Author: Professor Krasso;
Date: 2/7/2021;
Modified By: Jonathan Roland;
Description: This program demonstrates an understanding of passing data from a child to a parent component via Output;
===========================================*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})

//This class enables the exporting of values via Output() from the child wishlist creation component when addItem() is called.
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }
  //addItem emits the title and authors of an IWishlistItem object.
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })
    //Here the IWishlistItem array is reset after emitting values.
    this.item = {} as IWishlistItem;
  }

}
