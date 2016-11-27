import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';

import { Book } from '../models/book';
import { ADD, AppState }  from '../reducers/books.reducer';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  book: Book;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.book = new Book('', '', 0);
  }

  addBook() {
    this.store.dispatch({ type: ADD, payload: this.book });
  }
}
