// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Deposits} from '../../../models/deposits';

export enum DepositActionTypes {
  AllDepositsRequested = '[Deposits Module] All Deposits Requested',
  DepositsPageRequested = '[Deposits List Page] Deposits Page Requested',
  DepositsPageLoaded = '[Deposits API] Deposits Page Loaded',
  DepositsPageCancelled = '[Deposits API] Deposits Page Cancelled',
  DepositsPageToggleLoading = '[Deposits] Deposits Page Toggle Loading',
  DepositsActionToggleLoading = '[Deposits] Deposits Action Toggle Loading'
}

export class AllDepositsRequested implements Action {
  readonly type = DepositActionTypes.AllDepositsRequested;
  constructor(public payload: { deposits: Deposits[] }) {
  }
}

export class DepositsPageRequested implements Action {
  readonly type = DepositActionTypes.DepositsPageRequested;
}

export class DepositsPageLoaded implements Action {
  readonly type = DepositActionTypes.DepositsPageLoaded;

  constructor(public payload: { deposits: Deposits[] }) {
  }
}


export class DepositsPageCancelled implements Action {
  readonly type = DepositActionTypes.DepositsPageCancelled;
}

export class DepositsPageToggleLoading implements Action {
  readonly type = DepositActionTypes.DepositsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class DepositsActionToggleLoading implements Action {
  readonly type = DepositActionTypes.DepositsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type DepositActions = DepositsPageLoaded
  | AllDepositsRequested
  | DepositsPageCancelled
  | DepositsPageToggleLoading
  | DepositsPageRequested
  | DepositsActionToggleLoading;
