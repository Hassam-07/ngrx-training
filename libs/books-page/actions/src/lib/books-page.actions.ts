import { createAction, props } from '@ngrx/store';
import { BookRequiredProps } from '@book-co/shared-models';

export const enter = createAction('[Books page] Enter');
export const selectBook = createAction(
  '[Books page] Select a book',
  props<{ bookId: string }>()
);
export const clearSelectedBook = createAction(
  '[Books page] clear selected book'
);

export const createBook = createAction(
  '[Books page] Create a book',
  props<{ book: BookRequiredProps }>()
);
export const updateBook = createAction(
  '[Books page] Update book',
  props<{ bookId: string; changes: BookRequiredProps }>()
);
export const deleteBook = createAction(
  '[Books page] Delete book',
  props<{ bookId: string }>()
);
