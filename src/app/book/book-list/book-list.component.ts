import { Component, OnInit } from '@angular/core';

import { Store }      from "@ngrx/store";
import { Observable } from "rxjs";

import { AppState } from "../reducers/books.reducer";

@Component({
  selector: 'br-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  appState: Observable<AppState>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.appState = this.store.select('books') as Observable<AppState>;
  }

}
