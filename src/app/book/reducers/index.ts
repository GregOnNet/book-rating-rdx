import { Observable } from 'rxjs';
import { compose } from '@ngrx/core';
import { ActionReducer, combineReducers } from '@ngrx/store';

import { storeFreeze } from 'ngrx-store-freeze';

import * as fromBooks from './books';
import { environment } from './../../../environments/environment';

export interface State {
  books: fromBooks.State;
}

const reducers = {
  books: fromBooks.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }

  return developmentReducer(state, action);
}

export function getBookState(state$: Observable<State>) {
  return state$.select(state => state.books);
}

export const getAllBooks = compose(fromBooks.getAllBooks, getBookState);
