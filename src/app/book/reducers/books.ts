import '@ngrx/core/add/operator/select';

import { Observable } from 'rxjs';
import { Book } from '../models/book';

import * as book from '../actions/book';

export interface State {
  books: Array<Book>;
}

export const initialState: State = {
  books: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case book.ActionTypes.ADD:
      return {
        books: [...state.books].concat(new Book(action.payload.title, action.payload.description, action.payload.rating))
      };
    case book.ActionTypes.RATEUP:
      return {
        books: state.books.map(book => book.title === action.payload.title
                                ? Object.assign({}, action.payload, { rating: action.payload.rating + 1 })
                                : book)
      };
    case book.ActionTypes.RATEDOWN:
      return {
        books: state.books.map(book => book.title === action.payload.title
                                ? Object.assign({}, action.payload, { rating: action.payload.rating - 1 })
                                : book)
    };
    case book.ActionTypes.LOAD_SUCCESS:
      return {
        books: action.payload
      };
    default: return state;
  }
}

export function getAllBooks(state$: Observable<State>) {
  return state$.select(state => state.books);
}
