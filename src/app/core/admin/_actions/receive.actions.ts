// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Receives} from '../../../models/receives';

export enum ReceiveActionTypes {
  AllReceivesRequested = '[Receives Module] All Receives Requested',
  ReceivesPageRequested = '[Receives List Page] Receives Page Requested',
  ReceivesPageLoaded = '[Receives API] Receives Page Loaded',
  ReceivesPageCancelled = '[Receives API] Receives Page Cancelled',
  ReceivesPageToggleLoading = '[Receives] Receives Page Toggle Loading',
  ReceivesActionToggleLoading = '[Receives] Receives Action Toggle Loading'
}

export class AllReceivesRequested implements Action {
  readonly type = ReceiveActionTypes.AllReceivesRequested;
  constructor(public payload: { receives: Receives[] }) {
  }
}

export class ReceivesPageRequested implements Action {
  readonly type = ReceiveActionTypes.ReceivesPageRequested;
}

export class ReceivesPageLoaded implements Action {
  readonly type = ReceiveActionTypes.ReceivesPageLoaded;

  constructor(public payload: { receives: Receives[] }) {
  }
}


export class ReceivesPageCancelled implements Action {
  readonly type = ReceiveActionTypes.ReceivesPageCancelled;
}

export class ReceivesPageToggleLoading implements Action {
  readonly type = ReceiveActionTypes.ReceivesPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class ReceivesActionToggleLoading implements Action {
  readonly type = ReceiveActionTypes.ReceivesActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type ReceiveActions = ReceivesPageLoaded
  | AllReceivesRequested
  | ReceivesPageCancelled
  | ReceivesPageToggleLoading
  | ReceivesPageRequested
  | ReceivesActionToggleLoading;
