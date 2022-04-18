// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Roles} from '../../../models/roles';

export enum RolesActionTypes {
  AllRolesRequested = '[Roles Module] All Roles Requested',
  RolesDeleted = '[Roles Module] Roles Deleted',
  RolesPageRequested = '[Roles List Page] Roles Page Requested',
  RolesPageLoaded = '[Roles API] Roles Page Loaded',
  RolesPageCancelled = '[Roles API] Roles Page Cancelled',
  RolesPageToggleLoading = '[Roles] Roles Page Toggle Loading',
  RolesActionToggleLoading = '[Roles] Roles Action Toggle Loading'
}

export class AllRolesRequested implements Action {
  readonly type = RolesActionTypes.AllRolesRequested;
  constructor(public payload: { roles: Roles[] }) {
  }
}

export class RoleDeleted implements Action {
  readonly type = RolesActionTypes.RolesDeleted;

  constructor(public payload: { id: number }) {
  }
}

export class RolesPageRequested implements Action {
  readonly type = RolesActionTypes.RolesPageRequested;
}


export class RolesPageLoaded implements Action {
  readonly type = RolesActionTypes.RolesPageLoaded;

  constructor(public payload: { roles: Roles[] }) {
  }
}


export class RolesPageCancelled implements Action {
  readonly type = RolesActionTypes.RolesPageCancelled;
}

export class RolesPageToggleLoading implements Action {
  readonly type = RolesActionTypes.RolesPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class RolesActionToggleLoading implements Action {
  readonly type = RolesActionTypes.RolesActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type RoleActions = RolesPageLoaded
  | RoleDeleted
  | AllRolesRequested
  | RolesPageCancelled
  | RolesPageToggleLoading
  | RolesPageRequested
  | RolesActionToggleLoading;
