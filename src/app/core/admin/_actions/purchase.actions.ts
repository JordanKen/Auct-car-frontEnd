// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Purchases} from '../../../models/purchases';

export enum PurchasesActionTypes {
  PurchasesCreated = '[Purchases Module] Purchases Created',
  PurchasesPageRequested = '[Purchases List Page] Purchases Page Requested',
  PurchasesPageLoaded = '[Purchases API] Purchases Page Loaded',
  PurchasesPageCancelled = '[Purchases API] Purchases Page Cancelled',
  PurchasesPageToggleLoading = '[Purchases] Purchases Page Toggle Loading',
  PurchasesActionToggleLoading = '[Purchases] Purchases Action Toggle Loading'
}



export class PurchaseCreated implements Action {
  readonly type = PurchasesActionTypes.PurchasesCreated;

  constructor(public payload: { purchase: Purchases }) {
  }
}

export class PurchasesPageRequested implements Action {
  readonly type = PurchasesActionTypes.PurchasesPageRequested;
}


export class PurchasesPageLoaded implements Action {
  readonly type = PurchasesActionTypes.PurchasesPageLoaded;

  constructor(public payload: { purchases: Purchases[] }) {
  }
}


export class PurchasesPageCancelled implements Action {
  readonly type = PurchasesActionTypes.PurchasesPageCancelled;
}

export class PurchasesPageToggleLoading implements Action {
  readonly type = PurchasesActionTypes.PurchasesPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class PurchasesActionToggleLoading implements Action {
  readonly type = PurchasesActionTypes.PurchasesActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type PurchaseActions = PurchasesPageLoaded
  | PurchaseCreated
  | PurchasesPageCancelled
  | PurchasesPageToggleLoading
  | PurchasesPageRequested
  | PurchasesActionToggleLoading;
