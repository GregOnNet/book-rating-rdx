import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule }  from '@ngrx/store';

import { bookReducer } from './reducers/books.reducer';

import { BookComponent }     from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { SelectPipe }        from './pipes/select/select.pipe';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore({ book: bookReducer })
  ],
  exports: [BookComponent],
  declarations: [BookComponent, BookCardComponent, SelectPipe]
})
export class BookModule { }
