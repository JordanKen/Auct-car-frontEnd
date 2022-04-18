// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Deposit_methods} from '../../../models/deposit_methods';

export enum DepositMethodActionTypes {
  AllDepositMethodsRequested = '[DepositMethods Module] All DepositMethods Requested',
  DepositMethodsPageRequested = '[DepositMethods List Page] DepositMethods Page Requested',
  DepositMethodsPageLoaded = '[DepositMethods API] DepositMethods Page Loaded',
  DepositMethodsPageCancelled = '[DepositMethods API] DepositMethods Page Cancelled',
  DepositMethodsPageToggleLoading = '[DepositMethods] DepositMethods Page Toggle Loading',
  DepositMethodsActionToggleLoading = '[DepositMethods] DepositMethods Action Toggle Loading'
}

export class AllDepositMethodsRequested implements Action {
  readonly type = DepositMethodActionTypes.AllDepositMethodsRequested;
  constructor(public payload: { deposits: Deposit_methods[] }) {
  }
}

export class DepositMethodsPageRequested implements Action {
  readonly type = DepositMethodActionTypes.DepositMethodsPageRequested;
}

export class DepositMethodsPageLoaded implements Action {
  readonly type = DepositMethodActionTypes.DepositMethodsPageLoaded;

  constructor(public payload: { deposits: Deposit_methods[] }) {
  }
}


export class DepositMethodsPageCancelled implements Action {
  readonly type = DepositMethodActionTypes.DepositMethodsPageCancelled;
}

export class DepositMethodsPageToggleLoading implements Action {
  readonly type = DepositMethodActionTypes.DepositMethodsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class DepositMethodsActionToggleLoading implements Action {
  readonly type = DepositMethodActionTypes.DepositMethodsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type DepositMethodActions = DepositMethodsPageLoaded
  | AllDepositMethodsRequested
  | DepositMethodsPageCancelled
  | DepositMethodsPageToggleLoading
  | DepositMethodsPageRequested
  | DepositMethodsActionToggleLoading;
