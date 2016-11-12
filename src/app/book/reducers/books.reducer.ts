import { Book } from '../models/book';

export const ADD = 'ADD';

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
    default: return state;
  }
}
