import { Action } from '@ngrx/store';
import { Book } from '../models/book';
import { type } from '../utils';

export const ActionTypes = {
  ADD:           type('[Book] Add'),
  RATEUP:        type('[Book] Rate Up'),
  RATEDOWN:      type('[Book] Rate Down'),
  LOAD:          type('[Book] Load'),
  LOAD_SUCCESS:  type('[Book] Load Success'),
};

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Book[]) { }
}

export class LoadSuccessAction implements Action {
  type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Book[]) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction;
