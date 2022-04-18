// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {TicketcommentState} from '../_reducers/ticketcomment.reducers';

export const selectTicketcommentState = createFeatureSelector<TicketcommentState>('ticketcomments');

export const selectTicketcommentsById = (ticketcommentId: number) => createSelector(
  selectTicketcommentState,
  ticketcommentState => ticketcommentState.entities[ticketcommentId]
);
export const selectTicketcommentsPageLoading = createSelector(
  selectTicketcommentState,
  TicketcommentState => {
    return TicketcommentState.listLoading;
  }
);

export const selectTicketcommentsActionLoading = createSelector(
  selectTicketcommentState,
  ticketcommentState => ticketcommentState.actionsloading
);

export const selectTicketcommentsShowInitWaitingMessage = createSelector(
  selectTicketcommentState,
  ticketcommentState => ticketcommentState.showInitWaitingMessage
);
