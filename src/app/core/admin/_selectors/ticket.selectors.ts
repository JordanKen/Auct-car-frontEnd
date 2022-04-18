// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {TicketState} from '../_reducers/ticket.reducers';

export const selectTicketState = createFeatureSelector<TicketState>('tickets');

export const selectTicketsById = (ticketId: number) => createSelector(
  selectTicketState,
  ticketState => ticketState.entities[ticketId]
);
export const selectTicketsPageLoading = createSelector(
  selectTicketState,
  ticketState => {
    return ticketState.listLoading;
  }
);

export const selectTicketsActionLoading = createSelector(
  selectTicketState,
  ticketState => ticketState.actionsloading
);

export const selectTicketsShowInitWaitingMessage = createSelector(
  selectTicketState,
  ticketState => ticketState.showInitWaitingMessage
);
