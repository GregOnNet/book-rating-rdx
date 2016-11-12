import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule }  from '@ngrx/store';
import { FormsModule }  from '@angular/forms';

import { bookReducer }  from './reducers/book.reducer';
import { booksReducer } from './reducers/books.reducer';

import { BookComponent }     from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { SelectPipe }        from './pipes/select/select.pipe';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.provideStore({ books: booksReducer })
  ],
  exports: [BookComponent],
  declarations: [BookComponent, BookCardComponent, SelectPipe, BookFormComponent]
})
export class BookModule { }
