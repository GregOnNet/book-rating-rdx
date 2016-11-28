import { Component, Input } from '@angular/core';

import { Book } from '../../models/book';

@Component({
  selector: 'br-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent{
  @Input() books: Book[];
}
