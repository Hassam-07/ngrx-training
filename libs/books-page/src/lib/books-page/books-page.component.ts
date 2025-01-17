import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksApiActions, BooksPageActions } from '@book-co/books-page/actions';
import {
  BookModel,
  BookRequiredProps,
  calculateBooksGrossEarnings,
} from '@book-co/shared-models';
import {
  selectActiveBook,
  selectAllBooks,
  selectBooksEarningsTotal,
} from '@book-co/shared-state-books';
import { BooksService } from '@book-co/shared-services';

@Component({
  selector: 'bco-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  books$: Observable<BookModel[]>;
  currentBook$: Observable<BookModel | null>;
  total$: Observable<number>;

  constructor(private store: Store) {
    this.books$ = store.select(selectAllBooks);
    this.currentBook$ = store.select(selectActiveBook);
    this.total$ = store.select(selectBooksEarningsTotal);
  }

  ngOnInit() {
    // this.getBooks();
    this.removeSelectedBook();
    this.store.dispatch(BooksPageActions.enter());
  }

  // getBooks() {
  //   this.booksService.all().subscribe((books) => {
  //     this.store.dispatch(BooksApiActions.booksLoaded({ books }));
  //   });
  // }

  onSelect(book: BookModel) {
    this.store.dispatch(
      BooksPageActions.selectBook({
        bookId: book.id,
      })
    );
  }

  onCancel() {
    this.removeSelectedBook();
  }

  removeSelectedBook() {
    this.store.dispatch(BooksPageActions.clearSelectedBook());
  }

  onSave(book: BookRequiredProps | BookModel) {
    if ('id' in book) {
      this.updateBook(book);
    } else {
      this.saveBook(book);
    }
  }

  saveBook(bookProps: BookRequiredProps) {
    this.store.dispatch(
      BooksPageActions.createBook({
        book: bookProps,
      })
    );
  }

  updateBook(book: BookModel) {
    this.store.dispatch(
      BooksPageActions.updateBook({
        bookId: book.id,
        changes: book,
      })
    );
  }

  onDelete(book: BookModel) {
    this.store.dispatch(
      BooksPageActions.deleteBook({
        bookId: book.id,
      })
    );
  }
}
