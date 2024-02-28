import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../../../types/Book';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  isInCart: boolean = false;
  constructor(private cartService: CartService){
    
  }

  @Input() book:Book = {} as Book;
  @Input() i:number = 0;
  // @Output() bookEmitter = new EventEmitter<Book>();

  addToCard(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCard(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

}
