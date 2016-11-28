import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Book } from '../../models/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  @Output() bookCreated = new EventEmitter<Book>();
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.provideForm();
  }

  addBook() {
    let newBook = new Book(this.bookForm.controls['title'].value, this.bookForm.controls['description'].value, 0);
    this.bookForm.reset();

    this.bookCreated.emit(newBook);
  }

  provideForm() {
    this.bookForm = this.formBuilder.group({
      title: '',
      description: ''
    });
  }
}
