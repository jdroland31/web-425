import { SpawnSyncOptionsWithStringEncoding } from "child_process";
/**
 * Title: Assignment 1.4
 * Author: Professor Richard Krasso
 * Date: 12/21/2020
 * Modified By: Jonathan Roland
 * Description: demonstrate a basic Angular application
**/

//import the IPerson interface
import { IPerson } from "./person.interface";
//create class Person which implements IPerson interface
class Person implements IPerson{
    firstName: string;
    lastName: string;
    //constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//instantiate a Person class with my first and last name
let myName = new Person("Jonathan","Roland");
//output myName to the console
console.log(`My name is ${myName.firstName} ${myName.lastName}`);