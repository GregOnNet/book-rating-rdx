import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';

import { StoreModule }         from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './reducers';

import { BookComponent }     from './book.component';
import { BookCardComponent } from './book-card/book-card.component';
import { SelectPipe }        from './pipes/select/select.pipe';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  exports: [BookComponent],
  declarations: [BookComponent, BookCardComponent, SelectPipe, BookFormComponent, BookListComponent]
})
export class BookModule { }
