// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Escrows} from '../../../models/escrows';

export enum EscrowMethodActionTypes {
  AllEscrowRequested = '[Escrow Module] All Escrow Requested',
  EscrowPageRequested = '[Escrow List Page] Escrow Page Requested',
  EscrowPageLoaded = '[Escrow API] Escrow Page Loaded',
  EscrowPageCancelled = '[Escrow API] Escrow Page Cancelled',
  EscrowPageToggleLoading = '[Escrow] Escrow Page Toggle Loading',
  EscrowActionToggleLoading = '[Escrow] Escrow Action Toggle Loading'
}

export class AllEscrowRequested implements Action {
  readonly type = EscrowMethodActionTypes.AllEscrowRequested;
  constructor(public payload: { Escrow: Escrows[] }) {
  }
}

export class EscrowPageRequested implements Action {
  readonly type = EscrowMethodActionTypes.EscrowPageRequested;
}

export class EscrowPageLoaded implements Action {
  readonly type = EscrowMethodActionTypes.EscrowPageLoaded;

  constructor(public payload: { Escrow: Escrows[] }) {
  }
}


export class EscrowPageCancelled implements Action {
  readonly type = EscrowMethodActionTypes.EscrowPageCancelled;
}

export class EscrowPageToggleLoading implements Action {
  readonly type = EscrowMethodActionTypes.EscrowPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class EscrowActionToggleLoading implements Action {
  readonly type = EscrowMethodActionTypes.EscrowActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type EscrowMethodActions = EscrowPageLoaded
  | AllEscrowRequested
  | EscrowPageCancelled
  | EscrowPageToggleLoading
  | EscrowPageRequested
  | EscrowActionToggleLoading;
