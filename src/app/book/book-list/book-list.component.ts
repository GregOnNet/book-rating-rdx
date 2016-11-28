import { State } from './../reducers';
import 'rxjs/add/operator/let';

import { Component } from '@angular/core';

import { Store }      from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book }     from '../models/book';
import * as fromRoot from '../reducers';
import * as book from '../actions/book';

@Component({
  selector: 'br-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent{
  books$: Observable<Book[]>;

  constructor(private store: Store<State>) {
    this.books$ = store.let(fromRoot.getAllBooks);

    this.loadBooks();
  }

  loadBooks() {
    this.store.dispatch(new book.LoadAction([]));
  }
}
