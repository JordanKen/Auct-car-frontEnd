// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Currency_exchange_rates} from '../../../models/currency_exchange_rates';

export enum CurrencyExchangeRatesMethodActionTypes {
  AllCurrencyExchangeRatesRequested = '[CurrencyExchangeRates Module] All CurrencyExchangeRates Requested',
  CurrencyExchangeRatesCreated = '[CurrencyExchangeRates Module] CurrencyExchangeRates Created',
  CurrencyExchangeRatesPageRequested = '[CurrencyExchangeRates List Page] CurrencyExchangeRates Page Requested',
  CurrencyExchangeRatesPageLoaded = '[CurrencyExchangeRates API] CurrencyExchangeRates Page Loaded',
  CurrencyExchangeRatesPageCancelled = '[CurrencyExchangeRates API] CurrencyExchangeRates Page Cancelled',
  CurrencyExchangeRatesPageToggleLoading = '[CurrencyExchangeRates] CurrencyExchangeRates Page Toggle Loading',
  CurrencyExchangeRatesActionToggleLoading = '[CurrencyExchangeRates] CurrencyExchangeRates Action Toggle Loading'
}

export class AllCurrencyExchangeRatesRequested implements Action {
  readonly type = CurrencyExchangeRatesMethodActionTypes.AllCurrencyExchangeRatesRequested;
  constructor(public payload: { CurrencyExchangeRates: Currency_exchange_rates[] }) {
  }
}

export class CurrencyExchangeRatesCreated implements Action {
  readonly type = CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesCreated;
  constructor(public payload: { CurrencyExchangeRate: Currency_exchange_rates}) {
  }
}

export class CurrencyExchangeRatesPageRequested implements Action {
  readonly type = CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesPageRequested;
}

export class CurrencyExchangeRatesPageLoaded implements Action {
  readonly type = CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesPageLoaded;

  constructor(public payload: { CurrencyExchangeRates: Currency_exchange_rates[] }) {
  }
}


export class CurrencyExchangeRatesPageCancelled implements Action {
  readonly type = CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesPageCancelled;
}

export class CurrencyExchangeRatesPageToggleLoading implements Action {
  readonly type = CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class CurrencyExchangeRatesActionToggleLoading implements Action {
  readonly type = CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type CurrencyExchangeRatesMethodActions = CurrencyExchangeRatesPageLoaded
  | AllCurrencyExchangeRatesRequested
  | CurrencyExchangeRatesCreated
  | CurrencyExchangeRatesPageCancelled
  | CurrencyExchangeRatesPageToggleLoading
  | CurrencyExchangeRatesPageRequested
  | CurrencyExchangeRatesActionToggleLoading;
