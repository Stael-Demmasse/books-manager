import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookService } from './services/book/book.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {

  books: Array<any> ;

  constructor(private bookService: BookService) {
    this.books = this.bookService.books;

  }


  allFree(){
    this.bookService.switchAllBookToFree();
  }

  allTaken(){
    this.bookService.switchAllBookToTaken();
  }

  togigleStatus(book: any) {
    if (book.status === 'Available') {
      book.status = 'Taken';
    } else {
      book.status = 'Available';
    }
  }
  getstatusclass(){
    return this.books.map((book) => {
      return book.status === 'Available' ? 'available' : 'taken';
    });
  }

}
