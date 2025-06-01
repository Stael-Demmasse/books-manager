import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<any>;

  constructor() {
    this.books = [];

    for(let i=0; i <= 10; i++) {
      
      this.books.push({

        title: 'Book ' + i,
        author: 'Author ' + i,
        status: 'Available',
      });
  
    }
   }

   switchAllBookToFree(){
    this.books.forEach((book) => {
      book.status = 'Available';
    });
  }
    switchAllBookToTaken(){
      this.books.forEach((book) => {
        book.status = 'Taken';
      });
    }

}
