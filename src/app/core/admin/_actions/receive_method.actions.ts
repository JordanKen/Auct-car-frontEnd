// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Withdrawal_methods} from '../../../models/withdrawal_methods';

export enum WithdrawalMethodsActionTypes {
  AllWithdrawal_methodsRequested = '[Withdrawal_methods Module] All Withdrawal_methods Requested',
  Withdrawal_methodsPageRequested = '[Withdrawal_methods List Page] Withdrawal_methods Page Requested',
  Withdrawal_methodsPageLoaded = '[Withdrawal_methods API] Withdrawal_methods Page Loaded',
  Withdrawal_methodsPageCancelled = '[Withdrawal_methods API] Withdrawal_methods Page Cancelled',
  Withdrawal_methodsPageToggleLoading = '[Withdrawal_methods] Withdrawal_methods Page Toggle Loading',
  Withdrawal_methodsActionToggleLoading = '[Withdrawal_methods] Withdrawal_methods Action Toggle Loading'
}



export class WithdrawalMethodCreated implements Action {
  readonly type = WithdrawalMethodsActionTypes.AllWithdrawal_methodsRequested;

  constructor(public payload: { withdraw_method: Withdrawal_methods[] }) {
  }
}

export class WithdrawalMethodsPageRequested implements Action {
  readonly type = WithdrawalMethodsActionTypes.Withdrawal_methodsPageRequested;
}


export class WithdrawalMethodsPageLoaded implements Action {
  readonly type = WithdrawalMethodsActionTypes.Withdrawal_methodsPageLoaded;

  constructor(public payload: { withdraw_method: Withdrawal_methods[] }) {
  }
}


export class WithdrawalMethodsPageCancelled implements Action {
  readonly type = WithdrawalMethodsActionTypes.Withdrawal_methodsPageCancelled;
}

export class WithdrawalMethodsPageToggleLoading implements Action {
  readonly type = WithdrawalMethodsActionTypes.Withdrawal_methodsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class WithdrawalMethodsActionToggleLoading implements Action {
  readonly type = WithdrawalMethodsActionTypes.Withdrawal_methodsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type WithdrawalMethodActions =
  WithdrawalMethodCreated
  | WithdrawalMethodsPageLoaded
  | WithdrawalMethodsPageToggleLoading
  | WithdrawalMethodsPageRequested
  | WithdrawalMethodsActionToggleLoading;
