import { Component, OnInit } from '@angular/core';

import { Store }      from "@ngrx/store";
import { Observable } from "rxjs";
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { AppState } from "../reducers/books.reducer";
import { Book }     from "../models/book";

@Component({
  selector: 'br-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Observable<Book[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.books = this.store
      .select('books')
      .let((state: Observable<AppState>) => state.map(current => current.books));
  }
}
