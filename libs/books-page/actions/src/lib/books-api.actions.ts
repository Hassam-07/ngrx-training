import { createAction, props } from '@ngrx/store';
import { BookModel } from '@book-co/shared-models';

export const booksLoaded = createAction(
  '[Books Api] Books Loaded Success',
  props<{ books: BookModel[] }>()
);

export const bookCreated = createAction(
  '[Books Api] BooksCreated',
  props<{ book: BookModel }>()
);

export const bookUpdated = createAction(
  '[Books Api] Books Updated',
  props<{ book: BookModel }>()
);

export const bookDeleted = createAction(
  '[Books Api] Books Deleted',
  props<{ bookId: string }>()
);
