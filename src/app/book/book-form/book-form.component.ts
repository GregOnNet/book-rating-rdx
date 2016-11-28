import { Component, OnInit } from '@angular/core';
import { Store }             from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Book } from '../models/book';
import { ADD }  from '../reducers/books';
import { State } from '../reducers';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private store: Store<State>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.provideForm();
  }

  addBook() {
    let book = new Book(this.bookForm.controls['title'].value, this.bookForm.controls['subtitle'].value, 0);
    this.bookForm.reset();

    this.store.dispatch({ type: ADD, payload: book });
  }

  provideForm() {
    this.bookForm = this.formBuilder.group({
      title: '',
      subtitle: ''
    });
  }
}
