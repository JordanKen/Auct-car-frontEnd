// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Currencies} from '../../../models/currencies';

export enum CurrencyActionTypes {
  AllCurrenciesRequested = '[Currencies Module] All Currencies Requested',
  CurrenciesPageRequested = '[Currencies List Page] Currencies Page Requested',
  CurrenciesPageLoaded = '[Currencies API] Currencies Page Loaded',
  CurrenciesPageCancelled = '[Currencies API] Currencies Page Cancelled',
  CurrenciesPageToggleLoading = '[Currencies] Currencies Page Toggle Loading',
  CurrenciesActionToggleLoading = '[Currencies] Currencies Action Toggle Loading',
  CurrencyCreate = '[Create Currencies] Currency Created',

}
export class AllCurrenciesRequested implements Action {
  readonly type = CurrencyActionTypes.AllCurrenciesRequested;
  constructor(public payload: { currencies: Currencies[] }) {
  }
}

export class CurrenciesPageRequested implements Action {
  readonly type = CurrencyActionTypes.CurrenciesPageRequested;
}

export class CurrenciesPageLoaded implements Action {
  readonly type = CurrencyActionTypes.CurrenciesPageLoaded;

  constructor(public payload: { currencies: Currencies[] }) {
  }
}


export class CurrenciesPageCancelled implements Action {
  readonly type = CurrencyActionTypes.CurrenciesPageCancelled;
}

export class CurrenciesPageToggleLoading implements Action {
  readonly type = CurrencyActionTypes.CurrenciesPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class CurrenciesActionToggleLoading implements Action {
  readonly type = CurrencyActionTypes.CurrenciesActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class CurrencyCreate  implements Action {
  readonly type = CurrencyActionTypes.CurrencyCreate ;

  constructor(public payload: { currencies: Currencies  }) {
  }
}


export type CurrencyActions = CurrenciesPageLoaded
  | AllCurrenciesRequested
  | CurrenciesPageCancelled
  | CurrenciesPageToggleLoading
  | CurrenciesPageRequested
  | CurrenciesActionToggleLoading
  |CurrencyCreate;
