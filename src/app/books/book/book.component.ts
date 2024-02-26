import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {


  @Input() book:Book = {} as Book;
  @Input() i:number = 0;
  @Output() bookEmitter = new EventEmitter<Book>();

  addToCard(){
    this.bookEmitter.emit(this.book);
  }

}
