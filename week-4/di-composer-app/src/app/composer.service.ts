import { Injectable } from '@angular/core';
import{ IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
  //This constructor method instantiates an array of composers with composerId, fullName and genre.
    constructor(){
      this.composers = [
        {
          composerId: 100, fullName:"Ludwig Van Beethoven", genre: "Classical"
        },
        {
          composerId: 101, fullName:"Johann Sebastian Bach", genre: "Classical"
        },      {
          composerId: 102, fullName:"Wolfgang Amadeus Mozart", genre: "Classical"
        },      {
          composerId: 103, fullName:"Johannes Brahms", genre: "Classical"
        },      {
          composerId: 104, fullName:"Joseph Haydn", genre: "Classical"
        }
      ];
    }
    //This function returns the instantiated array of composers
    getComposers(){
      return this.composers;
    }
    //This function checks a given number to see if it matches a composer ID in the composers array and if true returns that composer.
    getComposer(composerId: number) {
      for (let composer of this.composers) {
        if (composer.composerId === composerId) {
          return composer;
        }
      }
    }
}
