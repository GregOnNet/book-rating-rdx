import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { Book } from './models/book';
import { State } from './reducers';

import * as book from './actions/book';

@Component({
  selector: 'br-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss']
})
export class BookComponent {

  constructor(private store: Store<State>) { }

  addBook(newBook: Book) {
    this.store.dispatch({ type: book.ActionTypes.ADD, payload: newBook });
  }
}
