import {Component, Input, ChangeDetectionStrategy}  from '@angular/core';

import { Store }      from '@ngrx/store';

import { State } from './../reducers';
import { Book } from '../models/book';
import * as book from '../actions/book';

@Component({
  selector: 'br-book-card',
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  @Input() book: Book;

  constructor(private store: Store<State>) { }

  rateUp() {
    this.store.dispatch({ type: book.ActionTypes.RATEUP, payload: this.book });
  }

  rateDown() {
    this.store.dispatch({ type: book.ActionTypes.RATEDOWN, payload: this.book });
  }
}
