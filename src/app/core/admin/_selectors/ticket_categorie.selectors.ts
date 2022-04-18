// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {TicketcategorieState} from '../_reducers/ticket_categorie.reducers';
export const selectTicketcategorieState = createFeatureSelector<TicketcategorieState>('ticketcategories');

export const selectTicketcategorieById = (ticketcategorieId: number) => createSelector(
  selectTicketcategorieState,
  ticketcategoriesState => ticketcategoriesState.entities[ticketcategorieId]
);
export const selectTicketcategoriesPageLoading = createSelector(
  selectTicketcategorieState,
  ticketcategoriesState => {
    return ticketcategoriesState.listLoading;
  }
);
export const selectTicketcategoriesActionLoading = createSelector(
  selectTicketcategorieState,
  ticketcategoriesState => ticketcategoriesState.actionsloading
);
export const selectTicketcategoriesShowInitWaitingMessage = createSelector(
  selectTicketcategorieState,
  ticketcategoriesState => ticketcategoriesState.showInitWaitingMessage
);
