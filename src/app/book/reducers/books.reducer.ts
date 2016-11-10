import { ActionReducer, Action } from '@ngrx/store';

import { Book } from '..//models/book';

export const RATEUP   = 'RATEUP';
export const RATEDOWN = 'RATEDOWN';

const initialState = {
  title: 'Angular',
  subtitle: 'Redux Intro',
  rating: 0
};

export const bookReducer: ActionReducer<Book> = (book: Book = initialState, action: Action) => {
  if (!book) return book;

  switch (action.type) {
    case RATEUP:
      return new Book(book.title, book.subtitle, book.rating + 1);
    case RATEDOWN:
      return new Book(book.title, book.subtitle, book.rating - 1);
    default:
      return book;
  }
};
