// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Tickets} from '../../../models/tickets';

export enum TicketActionTypes {
  TicketsPageRequested = '[Tickets List Page] Tickets Page Requested',
  TicketsPageLoaded = '[Tickets API] Tickets Page Loaded',
  TicketsPageCancelled = '[Tickets API] Tickets Page Cancelled',
  TicketsPageToggleLoading = '[Tickets] Tickets Page Toggle Loading',
  TicketsActionToggleLoading = '[Tickets] Tickets Action Toggle Loading',
  TicketsSaved = '[Save Wallets] Tickets Saved',
  TicketsDeleted = '[Delete Tickets ] Tickets  Deleted ',

}


export class TicketsPageRequested implements Action {
  readonly type = TicketActionTypes.TicketsPageRequested;
}

export class TicketsPageLoaded implements Action {
  readonly type = TicketActionTypes.TicketsPageLoaded;

  constructor(public payload: { tickets: Tickets[] }) {
  }
}


export class TicketsPageCancelled implements Action {
  readonly type = TicketActionTypes.TicketsPageCancelled;
}

export class TicketsPageToggleLoading implements Action {
  readonly type = TicketActionTypes.TicketsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class TicketsActionToggleLoading implements Action {
  readonly type = TicketActionTypes.TicketsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export class TicketsSaved implements Action {
  readonly type = TicketActionTypes.TicketsSaved;

  constructor(public payload: { tickets: Tickets }) {
  }
}
export class TicketsDeleted implements Action {
  readonly type = TicketActionTypes.TicketsDeleted;

  constructor(public payload: { id: number }) {
  }

}
// export class SettingsDeleted implements Action {
//   readonly type = SettingActionTypes.SettingsDeleted;
//
//   constructor(public payload: { id: number }) {
//   }
// }
export type TicketActions =   TicketsPageRequested
  |TicketsPageLoaded
  |TicketsPageCancelled
  |TicketsPageToggleLoading
  |TicketsActionToggleLoading
  |TicketsSaved
  |TicketsDeleted
  ;
