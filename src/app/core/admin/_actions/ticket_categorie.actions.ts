// NGRX
import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
// CRUD
import {Ticketcategories} from '../../../models/ticketcategories';

export enum TicketcategorieActionTypes {
  TicketcategoriesPageRequested = '[Ticketcategories List Page] Ticket Categories Page Requested',
  TicketcategoriesPageLoaded = '[Ticketcategories API] Ticket Categories Page Loaded',
  TicketcategoriesPageCancelled = '[Ticketcategories API] Ticket Categories Page Cancelled',
  TicketcategoriesPageToggleLoading = '[Ticket Categories] Ticket Categories Page Toggle Loading',
  TicketcategoriesActionToggleLoading = '[Ticket Categories] Ticket Categories Action Toggle Loading',
  TicketcategoriesSaved = '[Save Ticket Categories] Ticket Categories Saved',
  TicketcategoriesUpdated = '[Update Ticket Categories] Ticket Categories Updated',
  TicketcategoriesDeleted = '[Delete Ticket Categories] Ticket Categories Deleted',

}


export class TicketcategoriesPageRequested implements Action {
  readonly type = TicketcategorieActionTypes.TicketcategoriesPageRequested;
}

export class TicketcategoriesPageLoaded implements Action {
  readonly type = TicketcategorieActionTypes.TicketcategoriesPageLoaded;

  constructor(public payload: { ticketcategories: Ticketcategories[] }) {
  }
}


export class TicketcategoriesPageCancelled implements Action {
  readonly type = TicketcategorieActionTypes.TicketcategoriesPageCancelled;
}

export class TicketcategoriesPageToggleLoading implements Action {
  readonly type = TicketcategorieActionTypes.TicketcategoriesPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class TicketcategoriesActionToggleLoading implements Action {
  readonly type = TicketcategorieActionTypes.TicketcategoriesActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export class TicketcategoriesSaved implements Action {
  readonly type = TicketcategorieActionTypes.TicketcategoriesSaved;

  constructor(public payload: { ticketcategories: Ticketcategories }) {
  }
}
export class TicketcategoriesUpdated implements Action {
  readonly type = TicketcategorieActionTypes.TicketcategoriesUpdated;

  constructor(public payload: {
    partialticketcategories: Update<Ticketcategories>,
    ticketcategories: Ticketcategories
  }) {
  }
}
export class TicketcategoriesDeleted implements Action {
  readonly type = TicketcategorieActionTypes.TicketcategoriesDeleted;

  constructor(public payload: { id: number }) {
  }
}
export type TicketcategorieActions =
   TicketcategoriesPageRequested
  |TicketcategoriesPageLoaded
  |TicketcategoriesPageCancelled
  |TicketcategoriesPageToggleLoading
  |TicketcategoriesActionToggleLoading
  |TicketcategoriesSaved
  |TicketcategoriesUpdated
  |TicketcategoriesDeleted;
