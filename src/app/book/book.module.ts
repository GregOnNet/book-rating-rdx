import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';

import { StoreModule }         from '@ngrx/store';
import { EffectsModule }       from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './reducers';

import { BookEffects } from './effects/book';

import { BooksService } from './services/books.service';

import { BookComponent }     from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(BookEffects)
  ],
  providers: [BooksService],
  exports: [BookComponent],
  declarations: [BookComponent, BookCardComponent, BookFormComponent, BookListComponent]
})
export class BookModule { }
