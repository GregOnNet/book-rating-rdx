import { Store }     from '@ngrx/store';
import { Component } from '@angular/core';


import { Book }  from '../../models/book';

import { State } from '../../reducers/';
import * as book from '../../actions/book';

@Component({
  selector: 'br-books-hub',
  templateUrl: './books-hub.component.html'
})
export class BooksHubComponent {

  constructor(private store: Store<State>) { }

  addBook(newBook: Book) {
    this.store.dispatch({ type: book.ActionTypes.ADD, payload: newBook });
  }

  rateBookUp(ratedBook: Book) {
    this.store.dispatch({ type: book.ActionTypes.RATEUP, payload: ratedBook });
  }

  rateBookDown(ratedBook: Book) {
    this.store.dispatch({ type: book.ActionTypes.RATEDOWN, payload: ratedBook });
  }
}
