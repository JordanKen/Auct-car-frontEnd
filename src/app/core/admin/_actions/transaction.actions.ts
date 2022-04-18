// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Transactionable} from '../../../models/transactionable';

export enum TransactionActionTypes {
  AllTransactionsRequested = '[Transactions Module] All Transactions Requested',
  TransactionsPageRequested = '[Transactions List Page] Transactions Page Requested',
  TransactionsPageLoaded = '[Transactions API] Transactions Page Loaded',
  TransactionsPageCancelled = '[Transactions API] Transactions Page Cancelled',
  TransactionsPageToggleLoading = '[Transactions] Transactions Page Toggle Loading',
  TransactionsActionToggleLoading = '[Transactions] Transactions Action Toggle Loading'
}

export class AllTransactionsRequested implements Action {
  readonly type = TransactionActionTypes.AllTransactionsRequested;
  constructor(public payload: { transactionable: Transactionable[] }) {
  }
}

export class TransactionsPageRequested implements Action {
  readonly type = TransactionActionTypes.TransactionsPageRequested;
}

export class TransactionsPageLoaded implements Action {
  readonly type = TransactionActionTypes.TransactionsPageLoaded;

  constructor(public payload: { Transactionable: Transactionable[] }) {
  }
}


export class TransactionsPageCancelled implements Action {
  readonly type = TransactionActionTypes.TransactionsPageCancelled;
}

export class TransactionsPageToggleLoading implements Action {
  readonly type = TransactionActionTypes.TransactionsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class TransactionsActionToggleLoading implements Action {
  readonly type = TransactionActionTypes.TransactionsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export type TransactionActions = TransactionsPageLoaded
  |AllTransactionsRequested
  |TransactionsPageRequested
  |TransactionsPageCancelled
  |TransactionsPageToggleLoading
  |TransactionsActionToggleLoading ;
