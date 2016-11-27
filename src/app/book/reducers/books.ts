import '@ngrx/core/add/operator/select';

import { Observable } from 'rxjs';
import { Book } from '../models/book';

export const ADD = 'ADD';
export const RATEUP   = 'RATEUP';
export const RATEDOWN = 'RATEDOWN';

export interface State {
  books: Array<Book>;
}

export const initialState: State = {
  books: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        books: [...state.books].concat(new Book(action.payload.title, action.payload.subtitle, action.payload.rating))
      };
    case RATEUP:
      return {
        books: state.books.map(book => book.title === action.payload.title
                                ? Object.assign({}, action.payload, { rating: action.payload.rating + 1 })
                                : book)
      };
    case RATEDOWN:
      return {
        books: state.books.map(book => book.title === action.payload.title
                                ? Object.assign({}, action.payload, { rating: action.payload.rating - 1 })
                                : book)
    };
    default: return state;
  }
}

export function getAllBooks(state$: Observable<State>) {
  return state$.select(state => state.books);
}
