// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Merchants} from '../../../models/merchants';

export enum MerchantMethodActionTypes {
  CreateMerchantRequested = '[Merchant Module] Create Merchant Requested',
  DeleteMerchantRequested = '[Merchant Module] Delete Merchant Requested',
  AllMerchantRequested = '[Merchant Module] All Merchant Requested',
  MerchantPageRequested = '[Merchant List Page] Merchant Page Requested',
  MerchantPageLoaded = '[Merchant API] Merchant Page Loaded',
  MerchantPageCancelled = '[Merchant API] Merchant Page Cancelled',
  MerchantPageToggleLoading = '[Merchant] Merchant Page Toggle Loading',
  MerchantActionToggleLoading = '[Merchant] Merchant Action Toggle Loading'
}
export class CreateMerchantRequested implements Action {
  readonly type = MerchantMethodActionTypes.CreateMerchantRequested;
  constructor(public payload: { merchants: Merchants }) {
  }
}
export class DeleteMerchantRequested implements Action {
  readonly type = MerchantMethodActionTypes.DeleteMerchantRequested;
  constructor(public payload: { id: number }) {
  }
}
export class AllMerchantRequested implements Action {
  readonly type = MerchantMethodActionTypes.AllMerchantRequested;
  constructor(public payload: { merchants: Merchants[] }) {
  }
}

export class MerchantPageRequested implements Action {
  readonly type = MerchantMethodActionTypes.MerchantPageRequested;
}

export class MerchantPageLoaded implements Action {
  readonly type = MerchantMethodActionTypes.MerchantPageLoaded;

  constructor(public payload: { merchants: Merchants[] }) {
  }
}


export class MerchantPageCancelled implements Action {
  readonly type = MerchantMethodActionTypes.MerchantPageCancelled;
}

export class MerchantPageToggleLoading implements Action {
  readonly type = MerchantMethodActionTypes.MerchantPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class MerchantActionToggleLoading implements Action {
  readonly type = MerchantMethodActionTypes.MerchantActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type MerchantMethodActions = MerchantPageLoaded
  | CreateMerchantRequested
  | DeleteMerchantRequested
  | AllMerchantRequested
  | MerchantPageCancelled
  | MerchantPageToggleLoading
  | MerchantPageRequested
  | MerchantActionToggleLoading;
