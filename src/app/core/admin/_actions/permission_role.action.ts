// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Permission_role} from '../../../models/permission_role';

export enum Permission_roleMethodActionTypes {
  CreatePermission_roleRequested = '[Permission_role Module] Create Permission_role Requested',
  DeletePermission_roleRequested = '[Permission_role Module] Delete Permission_role Requested',
  AllPermission_roleRequested = '[Permission_role Module] All Permission_role Requested',
  Permission_rolePageRequested = '[Permission_role List Page] Permission_role Page Requested',
  Permission_rolePageLoaded = '[Permission_role API] Permission_role Page Loaded',
  Permission_rolePageCancelled = '[Permission_role API] Permission_role Page Cancelled',
  Permission_rolePageToggleLoading = '[Permission_role] Permission_role Page Toggle Loading',
  Permission_roleActionToggleLoading = '[Permission_role] Permission_role Action Toggle Loading'
}
export class CreatePermission_roleRequested implements Action {
  readonly type = Permission_roleMethodActionTypes.CreatePermission_roleRequested;
  constructor(public payload: { Permission_roles: Permission_role }) {
  }
}
export class DeletePermission_roleRequested implements Action {
  readonly type = Permission_roleMethodActionTypes.DeletePermission_roleRequested;
  constructor(public payload: { id: number }) {
  }
}
export class AllPermission_roleRequested implements Action {
  readonly type = Permission_roleMethodActionTypes.AllPermission_roleRequested;
  constructor(public payload: { Permission_roles: Permission_role[] }) {
  }
}

export class Permission_rolePageRequested implements Action {
  readonly type = Permission_roleMethodActionTypes.Permission_rolePageRequested;
}

export class Permission_rolePageLoaded implements Action {
  readonly type = Permission_roleMethodActionTypes.Permission_rolePageLoaded;

  constructor(public payload: { Permission_roles: Permission_role[] }) {
  }
}


export class Permission_rolePageCancelled implements Action {
  readonly type = Permission_roleMethodActionTypes.Permission_rolePageCancelled;
}

export class Permission_rolePageToggleLoading implements Action {
  readonly type = Permission_roleMethodActionTypes.Permission_rolePageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class Permission_roleActionToggleLoading implements Action {
  readonly type = Permission_roleMethodActionTypes.Permission_roleActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type Permission_roleMethodActions = Permission_rolePageLoaded
  | CreatePermission_roleRequested
  | DeletePermission_roleRequested
  | AllPermission_roleRequested
  | Permission_rolePageCancelled
  | Permission_rolePageToggleLoading
  | Permission_rolePageRequested
  | Permission_roleActionToggleLoading;
