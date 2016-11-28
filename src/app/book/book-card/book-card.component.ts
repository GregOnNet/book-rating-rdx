import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy}  from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'br-book-card',
  templateUrl: 'book-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  @Input() book: Book;
  @Output() ratedUp = new EventEmitter<Book>();
  @Output() ratedDown = new EventEmitter<Book>();
}
