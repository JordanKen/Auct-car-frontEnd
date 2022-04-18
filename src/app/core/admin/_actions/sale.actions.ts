// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Sales} from '../../../models/sales';

export enum SaleActionTypes {
  AllSalesRequested = '[Sales Module] All Sales Requested',
  SalesPageRequested = '[Sales List Page] Sales Page Requested',
  SalesPageLoaded = '[Sales API] Sales Page Loaded',
  SalesPageCancelled = '[Sales API] Sales Page Cancelled',
  SalesPageToggleLoading = '[Sales] Sales Page Toggle Loading',
  SalesActionToggleLoading = '[Sales] Sales Action Toggle Loading'
}

export class AllSalesRequested implements Action {
  readonly type = SaleActionTypes.AllSalesRequested;
  constructor(public payload: { sales: Sales[] }) {
  }
}

export class SalesPageRequested implements Action {
  readonly type = SaleActionTypes.SalesPageRequested;
}

export class SalesPageLoaded implements Action {
  readonly type = SaleActionTypes.SalesPageLoaded;

  constructor(public payload: { sales: Sales[] }) {
  }
}


export class SalesPageCancelled implements Action {
  readonly type = SaleActionTypes.SalesPageCancelled;
}

export class SalesPageToggleLoading implements Action {
  readonly type = SaleActionTypes.SalesPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class SalesActionToggleLoading implements Action {
  readonly type = SaleActionTypes.SalesActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export type SaleActions = SalesPageLoaded
  |AllSalesRequested
  |SalesPageRequested
  |SalesPageCancelled
  |SalesPageToggleLoading
  |SalesActionToggleLoading ;
