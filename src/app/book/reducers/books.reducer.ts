import { Book } from '../models/book';

export const ADD = 'ADD';
export const RATEUP   = 'RATEUP';
export const RATEDOWN = 'RATEDOWN';

export interface AppState {
  books: Array<Book>;
}

const initialState: AppState = {
  books: []
};

export function booksReducer(state = initialState, action) {
  switch(action.type) {
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
