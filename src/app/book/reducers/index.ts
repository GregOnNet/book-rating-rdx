import { Observable } from 'rxjs';
import { compose } from '@ngrx/core';
import { ActionReducer, combineReducers } from '@ngrx/store';

import * as fromBooks from './books';

export interface State {
  books: fromBooks.State;
}

const reducers = {
  books: fromBooks.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return productionReducer(state, action);
};

export function getBookState(state$: Observable<State>) {
  return state$.select(state => state.books);
}

export const getAllBooks = compose(fromBooks.getAllBooks, getBookState);
