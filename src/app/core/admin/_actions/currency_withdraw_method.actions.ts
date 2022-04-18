// NGRX
import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
// CRUD
import { Currency_withdrawal_methods } from '../../../models/currency_withdrawal_methods';

export enum CurrencyWithdrawalMethodActionTypes {
  AllCurrencyWithdrawalMethodsRequested = '[CurrencyWithdrawalMethods Module] All Currency Withdrawal Methods Requested',
  CurrencyWithdrawalMethodsPageRequested = '[CurrencyWithdrawalMethods List Page] Currency Withdrawal Methods Page Requested',
  CurrencyWithdrawalMethodsPageLoaded = '[CurrencyWithdrawalMethods API] Currency Withdrawal Methods Page Loaded',
  CurrencyWithdrawalMethodsPageCancelled = '[CurrencyWithdrawalMethods API] Currency Withdrawal Methods Page Cancelled',
  CurrencyWithdrawalMethodsPageToggleLoading = '[CurrencyWithdrawalMethods] Currency Withdrawal Methods Page Toggle Loading',
  CurrencyWithdrawalMethodsActionToggleLoading = '[CurrencyWithdrawalMethods] Currency Withdrawal Methods Action Toggle Loading',
  CurrencyWithdrawalMethodsCreated = '[Create Currency Withdrawal Methods] Currency Withdrawal Methods Created',
  CurrencyWithdrawalMethodsUpdated = '[Update Currency Withdrawal Methods] Currency Withdrawal Methods Updated',
  CurrencyWithdrawalMethodsDeleted = '[Delete Currency Withdrawal Methods] Currency Withdrawal Methods Deleted',

}

export class AllCurrencyWithdrawalMethodsRequested implements Action {

  readonly type = CurrencyWithdrawalMethodActionTypes.AllCurrencyWithdrawalMethodsRequested;
  constructor(public payload: { currency_withdrawal_methods: Currency_withdrawal_methods[]}) {
  }
}

export class CurrencyWithdrawalMethodsPageRequested implements Action {
  readonly type = CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsPageRequested;
}

export class CurrencyWithdrawalMethodsPageLoaded implements Action {
  readonly type = CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsPageLoaded;

  constructor(public payload: { currency_withdrawal_methods: Currency_withdrawal_methods[] }) {
  }
}


export class CurrencyWithdrawalMethodsPageCancelled implements Action {
  readonly type = CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsPageCancelled;
}

export class CurrencyWithdrawalMethodsPageToggleLoading implements Action {
  readonly type = CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class CurrencyWithdrawalMethodsActionToggleLoading implements Action {
  readonly type = CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export class CurrencyWithdrawalMethodsCreated implements Action {
  readonly type = CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsCreated;

  constructor(public payload: { currency_withdrawal_methods: Currency_withdrawal_methods }) {
  }
}

export class CurrencyWithdrawalMethodsUpdated implements Action {
  readonly type = CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsUpdated;

  constructor(public payload: {
    partialcurrencywithdrawalmethods: Update<Currency_withdrawal_methods>,
    currencyWithdrawaltmethods: Currency_withdrawal_methods
  }) {
  }
}
export class CurrencyWithdrawalMethodsDeleted implements Action {
  readonly type = CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsDeleted;

  constructor(public payload: { id: number }) {
  }
}
export type CurrencyWithdrawalMethodActions =  AllCurrencyWithdrawalMethodsRequested
  |CurrencyWithdrawalMethodsPageRequested
  |CurrencyWithdrawalMethodsPageLoaded
  |CurrencyWithdrawalMethodsPageCancelled
  |CurrencyWithdrawalMethodsPageToggleLoading
  |CurrencyWithdrawalMethodsActionToggleLoading
  |CurrencyWithdrawalMethodsCreated
  |CurrencyWithdrawalMethodsUpdated
  |CurrencyWithdrawalMethodsDeleted;
