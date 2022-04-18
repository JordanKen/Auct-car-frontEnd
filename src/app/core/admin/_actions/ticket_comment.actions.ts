// NGRX
import {Action} from '@ngrx/store';
// CRUD
import {Ticketcomments} from '../../../models/ticketcomments';

export enum TicketcommentActionTypes {
  TicketcommentsPageRequested = '[Ticket comments List Page] Ticket Comments Page Requested',
  TicketcommentsPageLoaded = '[Ticketcomments API] Ticket Comments Page Loaded',
  TicketcommentsPageCancelled = '[Ticketcomments API] Ticket Comments Page Cancelled',
  TicketcommentsPageToggleLoading = '[Ticketcomments] Ticket Comments Page Toggle Loading',
  TicketcommentsActionToggleLoading = '[Ticketcomments] Ticket Comments Action Toggle Loading',
  TicketcommentsSaved = '[Save Ticket Comments] Ticket Comments Saved',
  TicketcommentsDeleted = '[Ticket Comments Deleted] Ticket Comments Deleted ',

}


export class TicketcommentsPageRequested implements Action {
  readonly type = TicketcommentActionTypes.TicketcommentsPageRequested;
}

export class TicketcommentsPageLoaded implements Action {
  readonly type = TicketcommentActionTypes.TicketcommentsPageLoaded;

  constructor(public payload: { ticketcomments: Ticketcomments[] }) {
  }
}


export class TicketcommentsPageCancelled implements Action {
  readonly type = TicketcommentActionTypes.TicketcommentsPageCancelled;
}

export class TicketcommentsPageToggleLoading implements Action {
  readonly type = TicketcommentActionTypes.TicketcommentsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class TicketcommentsActionToggleLoading implements Action {
  readonly type = TicketcommentActionTypes.TicketcommentsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export class TicketcommentsSaved implements Action {
  readonly type = TicketcommentActionTypes.TicketcommentsSaved;

  constructor(public payload: { ticketcomments: Ticketcomments }) {
  }
}
export class TicketcommentsDeleted implements Action {
  readonly type = TicketcommentActionTypes.TicketcommentsDeleted;

  constructor(public payload: { id: number }) {
  }

}
// export class SettingsDeleted implements Action {
//   readonly type = SettingActionTypes.SettingsDeleted;
//
//   constructor(public payload: { id: number }) {
//   }
// }
export type TicketcommentActions =     TicketcommentsPageRequested
  |TicketcommentsPageLoaded
  |TicketcommentsPageCancelled
  |TicketcommentsPageToggleLoading
  |TicketcommentsActionToggleLoading
  |TicketcommentsSaved
  |TicketcommentsDeleted
  ;
