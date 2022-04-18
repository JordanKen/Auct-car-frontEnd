// NGRX
import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
// CRUD
import { Currency_deposit_methods } from '../../../models/currency_deposit_methods';

export enum CurrencyDepositMethodActionTypes {
  AllCurrencyDepositMethodsRequested = '[CurrencyDepositMethods Module] All Currency Deposit Methods Requested',
  CurrencyDepositMethodsPageRequested = '[CurrencyDepositMethods List Page] Currency Deposit Methods Page Requested',
  CurrencyDepositMethodsPageLoaded = '[CurrencyDepositMethods API] Currency Deposit Methods Page Loaded',
  CurrencyDepositMethodsPageCancelled = '[CurrencyDepositMethods API] Currency Deposit Methods Page Cancelled',
  CurrencyDepositMethodsPageToggleLoading = '[CurrencyDepositMethods] Currency Deposit Methods Page Toggle Loading',
  CurrencyDepositMethodsActionToggleLoading = '[CurrencyDepositMethods] Currency Deposit Methods Action Toggle Loading',
  CurrencyDepositMethodsCreated = '[Create Currency Deposit Methods] Currency Deposit Methods Created',
  CurrencyDepositMethodsUpdated = '[Update Currency Deposit Methods] Currency Deposit Methods Updated',
  CurrencyDepositMethodsDeleted = '[Delete Currency Deposit Methods] Currency Deposit Methods Deleted',

}


export class AllCurrencyDepositMethodsRequested implements Action {

  readonly type = CurrencyDepositMethodActionTypes.AllCurrencyDepositMethodsRequested;
  constructor(public payload: { currency_deposit_methods: Currency_deposit_methods[]}) {
  }
}

export class CurrencyDepositMethodsPageRequested implements Action {
  readonly type = CurrencyDepositMethodActionTypes.CurrencyDepositMethodsPageRequested;
}

export class CurrencyDepositMethodsPageLoaded implements Action {
  readonly type = CurrencyDepositMethodActionTypes.CurrencyDepositMethodsPageLoaded;

  constructor(public payload: { currency_deposit_methods: Currency_deposit_methods[] }) {
  }
}


export class CurrencyDepositMethodsPageCancelled implements Action {
  readonly type = CurrencyDepositMethodActionTypes.CurrencyDepositMethodsPageCancelled;
}

export class CurrencyDepositMethodsPageToggleLoading implements Action {
  readonly type = CurrencyDepositMethodActionTypes.CurrencyDepositMethodsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class CurrencyDepositMethodsActionToggleLoading implements Action {
  readonly type = CurrencyDepositMethodActionTypes.CurrencyDepositMethodsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export class CurrencyDepositMethodsCreated implements Action {
  readonly type = CurrencyDepositMethodActionTypes.CurrencyDepositMethodsCreated;

  constructor(public payload: { currency_deposit_methods: Currency_deposit_methods}) {
  }
}
export class CurrencyDepositMethodsUpdated implements Action {
  readonly type = CurrencyDepositMethodActionTypes.CurrencyDepositMethodsUpdated;

  constructor(public payload: {
    partialcurrencydepositmethods: Update<Currency_deposit_methods>,
    currencydepositmethods: Currency_deposit_methods
  }) {
  }
}
export class CurrencyDepositMethodsDeleted implements Action {
  readonly type = CurrencyDepositMethodActionTypes.CurrencyDepositMethodsDeleted;

  constructor(public payload: { id: number }) {
  }
}
export type CurrencyDepositMethodActions =  AllCurrencyDepositMethodsRequested
  |CurrencyDepositMethodsPageRequested
  |CurrencyDepositMethodsPageLoaded
  |CurrencyDepositMethodsPageCancelled
  |CurrencyDepositMethodsPageToggleLoading
  |CurrencyDepositMethodsActionToggleLoading
  |CurrencyDepositMethodsCreated
  |CurrencyDepositMethodsUpdated
  |CurrencyDepositMethodsDeleted;
