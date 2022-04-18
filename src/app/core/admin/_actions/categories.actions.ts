// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Categories} from '../../../models/categories';

export enum CategoryActionTypes {
  CategoryCreated = '[Category Module] User Created',
  CategoryMethodsPageRequested = '[CategoryMethods List Page] CategoryMethods Page Requested',
  CategoryMethodsPageLoaded = '[CategoryMethods API] CategoryMethods Page Loaded',
  CategoryMethodsPageCancelled = '[CategoryMethods API] CategoryMethods Page Cancelled',
  CategoryMethodsPageToggleLoading = '[CategoryMethods] CategoryMethods Page Toggle Loading',
  CategoryMethodsActionToggleLoading = '[CategoryMethods] CategoryMethods Action Toggle Loading'
}

export class CategoryCreated implements Action {
  readonly type = CategoryActionTypes.CategoryCreated;
  constructor(public payload: { category: Categories }) {
  }
}

export class CategoryMethodsPageRequested implements Action {
  readonly type = CategoryActionTypes.CategoryMethodsPageRequested;
}

export class CategoryMethodsPageLoaded implements Action {
  readonly type = CategoryActionTypes.CategoryMethodsPageLoaded;

  constructor(public payload: { categories: Categories[] }) {
  }
}


export class CategoryMethodsPageCancelled implements Action {
  readonly type = CategoryActionTypes.CategoryMethodsPageCancelled;
}

export class CategoryMethodsPageToggleLoading implements Action {
  readonly type = CategoryActionTypes.CategoryMethodsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class CategoryMethodsActionToggleLoading implements Action {
  readonly type = CategoryActionTypes.CategoryMethodsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type CategoryActions = CategoryMethodsPageLoaded
  | CategoryCreated
  | CategoryMethodsPageCancelled
  | CategoryMethodsPageToggleLoading
  | CategoryMethodsPageRequested
  | CategoryMethodsActionToggleLoading;
