import { Component }  from '@angular/core';
import { Observable } from 'rxjs';
import { Store }      from '@ngrx/store';

import { Book }             from '../models/book';
import { RATEUP, RATEDOWN } from '../reducers/books.reducer';

interface AppState {
  book: Book;
}

@Component({
  selector: 'br-book-card',
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.scss']
})
export class BookCardComponent {
  book: Observable<Book>;

  constructor(private store: Store<AppState>) {
    this.book = store.select('book') as Observable<Book>;
  }

  rateUp() {
    this.store.dispatch({ type: RATEUP });
  }

  rateDown() {
    this.store.dispatch({ type: RATEDOWN });
  }
}
