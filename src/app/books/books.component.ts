import { Component, OnInit } from '@angular/core';
import { Book } from '../../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent  {
  books : Book[] = [];
  constructor(private booksService: BooksService){
    
  }
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
 
 
  isShowing = true;

  // addToCard(book: Book){
  //   console.log(book);
  // }


  
}
