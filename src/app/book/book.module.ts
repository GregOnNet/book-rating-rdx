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
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksHubComponent } from './containers/books-hub/books-hub.component';

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
  declarations: [BookComponent, BookCardComponent, BookFormComponent, BookListComponent, BooksHubComponent]
})
export class BookModule { }
