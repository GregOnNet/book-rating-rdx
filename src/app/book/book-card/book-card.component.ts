import {Component, Input}  from '@angular/core';
import { Store }      from '@ngrx/store';

import { Book }             from '../models/book';
import { RATEUP, RATEDOWN } from '../reducers/book.reducer';
import {AppState} from "../reducers/books.reducer";

@Component({
  selector: 'br-book-card',
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.scss']
})
export class BookCardComponent {
  @Input() book: Book;

  constructor(private store: Store<AppState>) { }

  rateUp() {
    this.store.dispatch({ type: RATEUP });
  }

  rateDown() {
    this.store.dispatch({ type: RATEDOWN });
  }
}
