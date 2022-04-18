// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Country} from '../../../models/country';

export enum CountryActionTypes {
  AllCountryRequested = '[Country Module] All Country Requested',
  CountryPageRequested = '[Country List Page] Country Page Requested',
  CountryPageLoaded = '[Country API] Country Page Loaded',
  CountryPageCancelled = '[Country API] Country Page Cancelled',
  CountryPageToggleLoading = '[Country] Country Page Toggle Loading',
  CountryActionToggleLoading = '[Country] Country Action Toggle Loading'
}

export class AllCountryRequested implements Action {
  readonly type = CountryActionTypes.AllCountryRequested;
  constructor(public payload: { country: Country[] }) {
  }
}

export class CountryPageRequested implements Action {
  readonly type = CountryActionTypes.CountryPageRequested;
}

export class CountryPageLoaded implements Action {
  readonly type = CountryActionTypes.CountryPageLoaded;

  constructor(public payload: { country: Country[] }) {
  }
}


export class CountryPageCancelled implements Action {
  readonly type = CountryActionTypes.CountryPageCancelled;
}

export class CountryPageToggleLoading implements Action {
  readonly type = CountryActionTypes.CountryPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class CountryActionToggleLoading implements Action {
  readonly type = CountryActionTypes.CountryActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type CountryActions = CountryPageLoaded
  | AllCountryRequested
  | CountryPageCancelled
  | CountryPageToggleLoading
  | CountryPageRequested
  | CountryActionToggleLoading;
