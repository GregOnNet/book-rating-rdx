import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { BooksService } from './../services/books.service';
import * as book from '../actions/book';

@Injectable()
export class BookEffects {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(book.ActionTypes.LOAD)
    .switchMap(() => {
      return this.booksService
        .getAll()
        .map(books => new book.LoadSuccessAction(books));
    });

  constructor(private actions$: Actions, private booksService: BooksService) { }
}
