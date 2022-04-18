// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Receives} from '../../../models/receives';

export enum WithDrawActionTypes {
  AllWithdrawsRequested = '[Withdraws Module] All Withdraws Requested',
  WithdrawsPageRequested = '[Withdraws List Page] Withdraws Page Requested',
  WithdrawsPageLoaded = '[Withdraws API] Withdraws Page Loaded',
  WithdrawsPageCancelled = '[Withdraws API] Withdraws Page Cancelled',
  WithdrawsPageToggleLoading = '[Withdraws] Withdraws Page Toggle Loading',
  WithdrawsActionToggleLoading = '[Withdraws] Withdraws Action Toggle Loading'
}

export class AllWithdrawsRequested implements Action {
  readonly type = WithDrawActionTypes.AllWithdrawsRequested;
  constructor(public payload: { receives: Receives[] }) {
  }
}

export class WithdrawsPageRequested implements Action {
  readonly type = WithDrawActionTypes.WithdrawsPageRequested;
}

export class WithdrawsPageLoaded implements Action {
  readonly type = WithDrawActionTypes.WithdrawsPageLoaded;

  constructor(public payload: { receives: Receives[] }) {
  }
}


export class WithdrawsPageCancelled implements Action {
  readonly type = WithDrawActionTypes.WithdrawsPageCancelled;
}

export class WithdrawsPageToggleLoading implements Action {
  readonly type = WithDrawActionTypes.WithdrawsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class WithdrawsActionToggleLoading implements Action {
  readonly type = WithDrawActionTypes.WithdrawsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type WithdrawActions = WithdrawsPageLoaded
  | AllWithdrawsRequested
  | WithdrawsPageCancelled
  | WithdrawsPageToggleLoading
  | WithdrawsPageRequested
  | WithdrawsActionToggleLoading;
