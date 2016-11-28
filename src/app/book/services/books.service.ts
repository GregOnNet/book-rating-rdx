import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Book } from './../models/book';

@Injectable()
export class BooksService {
  apiEndpoint = 'https://book-monkey2-api.angular-buch.com';

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http
      .get(`${this.apiEndpoint}/books`)
      .map(response => response.json())
      .map(books => books.map(book => new Book(book.title, book.description, book.rating)));
  }
}
