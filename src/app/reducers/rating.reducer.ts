import { ActionReducer, Action } from '@ngrx/store';
import { Book } from "../models/book";

export const RATEUP   = 'RATEUP';
export const RATEDOWN = 'RATEDOWN';

export const ratingReducer: ActionReducer<Book> = (state: Book, action: Action) => {
  if (!state) return state;

  switch (action.type) {
    case RATEUP:
      return new Book(state.title, state.subtitle, state.rating + 1);
    case RATEDOWN:
      return new Book(state.title, state.subtitle, state.rating + 1);
    default:
      return state;
  }
};
