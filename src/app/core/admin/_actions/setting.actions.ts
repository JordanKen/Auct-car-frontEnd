// NGRX
import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
// CRUD
import {Settings} from '../../../models/settings';

export enum SettingActionTypes {
  AllSettingsRequested = '[Settings Module] All Settings Requested',
  SettingsPageRequested = '[Settings List Page] Settings Page Requested',
  SettingsPageLoaded = '[Settings API] Settings Page Loaded',
  SettingsPageCancelled = '[Settings API] Settings Page Cancelled',
  SettingsPageToggleLoading = '[Settings] Settings Page Toggle Loading',
  SettingsActionToggleLoading = '[Settings] Settings Action Toggle Loading',
  SettingsSaved = '[Save Settings] Settings Saved',
  SettingsUpdated = '[Update Settings] Settings Updated',
  SettingsDeleted = '[Delete Settings] Settings Deleted',

}

export class AllSettingsRequested implements Action {
    // key(key: any): import("rxjs").Observable<any> {
    //     throw new Error("Method not implemented.");
    // }
  readonly type = SettingActionTypes.AllSettingsRequested;
  constructor(public payload: { settings: Settings[], key: any }) {
  }
}

export class SettingsPageRequested implements Action {
  readonly type = SettingActionTypes.SettingsPageRequested;
}

export class SettingsPageLoaded implements Action {
  readonly type = SettingActionTypes.SettingsPageLoaded;

  constructor(public payload: { settings: Settings[] }) {
  }
}


export class SettingsPageCancelled implements Action {
  readonly type = SettingActionTypes.SettingsPageCancelled;
}

export class SettingsPageToggleLoading implements Action {
  readonly type = SettingActionTypes.SettingsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class SettingsActionToggleLoading implements Action {
  readonly type = SettingActionTypes.SettingsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export class SettingsSaved implements Action {
  readonly type = SettingActionTypes.SettingsSaved;

  constructor(public payload: { settings: Settings }) {
  }
}
export class SettingsUpdated implements Action {
  readonly type = SettingActionTypes.SettingsUpdated;

  constructor(public payload: {
    partialsettings: Update<Settings>,
    settings: Settings
  }) {
  }
}
export class SettingsDeleted implements Action {
  readonly type = SettingActionTypes.SettingsDeleted;

  constructor(public payload: { id: number }) {
  }
}
export type SettingActions =  AllSettingsRequested
  |SettingsPageRequested
  |SettingsPageLoaded
  |SettingsPageCancelled
  |SettingsPageToggleLoading
  |SettingsActionToggleLoading
  |SettingsSaved
  |SettingsUpdated
  |SettingsDeleted;
