import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule }  from '@ngrx/store';

import { ratingReducer }     from './reducers/rating.reducer';

import { BookComponent }     from './book.component';
import { BookCardComponent } from './book-card/book-card.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({ rating: ratingReducer })
  ],
  declarations: [BookComponent, BookCardComponent]
})
export class BookModule { }
