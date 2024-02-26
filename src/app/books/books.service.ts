import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks(){
    return [
      {
        name : "clean code",
        author : "Robert C. Martin",
        image : "https://m.media-amazon.com/images/I/51b7XbfMIIL._SY466_.jpg",
        amount: 700
      },
      {
        name : "Pragmatic programmer",
        author : "David Thmoas",
        image : "https://m.media-amazon.com/images/I/51yaxPX4BFL._SY466_.jpg",
        amount: 800
      },
      {
        name : "clean code",
        author : "Robert C. Martin",
        image : "https://m.media-amazon.com/images/I/51b7XbfMIIL._SY466_.jpg",
        amount: 700
      },
      {
        name : "Pragmatic programmer",
        author : "David Thmoas",
        image : "https://m.media-amazon.com/images/I/51yaxPX4BFL._SY466_.jpg",
        amount: 800
      },
    ];
  }
}
