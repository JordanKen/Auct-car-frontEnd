// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Exchanges} from '../../../models/exchanges';

export enum ExchangeMethodActionTypes {
  AllExchangeRequested = '[Exchange Module] All Exchange Requested',
  ExchangePageRequested = '[Exchange List Page] Exchange Page Requested',
  ExchangePageLoaded = '[Exchange API] Exchange Page Loaded',
  ExchangePageCancelled = '[Exchange API] Exchange Page Cancelled',
  ExchangePageToggleLoading = '[Exchange] Exchange Page Toggle Loading',
  ExchangeActionToggleLoading = '[Exchange] Exchange Action Toggle Loading'
}

export class AllExchangeRequested implements Action {
  readonly type = ExchangeMethodActionTypes.AllExchangeRequested;
  constructor(public payload: { Exchange: Exchanges[] }) {
  }
}

export class ExchangePageRequested implements Action {
  readonly type = ExchangeMethodActionTypes.ExchangePageRequested;
}

export class ExchangePageLoaded implements Action {
  readonly type = ExchangeMethodActionTypes.ExchangePageLoaded;

  constructor(public payload: { Exchange: Exchanges[] }) {
  }
}


export class ExchangePageCancelled implements Action {
  readonly type = ExchangeMethodActionTypes.ExchangePageCancelled;
}

export class ExchangePageToggleLoading implements Action {
  readonly type = ExchangeMethodActionTypes.ExchangePageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class ExchangeActionToggleLoading implements Action {
  readonly type = ExchangeMethodActionTypes.ExchangeActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type ExchangeMethodActions = ExchangePageLoaded
  | AllExchangeRequested
  | ExchangePageCancelled
  | ExchangePageToggleLoading
  | ExchangePageRequested
  | ExchangeActionToggleLoading;
