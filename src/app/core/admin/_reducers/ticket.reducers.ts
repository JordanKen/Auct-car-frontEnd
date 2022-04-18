// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {TicketActions, TicketActionTypes} from '../_actions/ticket.actions';
// Models
import {Tickets} from '../../../models/tickets';

// tslint:disable-next-line:no-empty-interface
export interface TicketState extends EntityState<Tickets> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Tickets> = createEntityAdapter<Tickets>();

export const initialTicketsState: TicketState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function ticketsReducer(state = initialTicketsState, action:  TicketActions): TicketState {
  switch (action.type) {

    case TicketActionTypes.TicketsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case TicketActionTypes.TicketsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case TicketActionTypes.TicketsPageLoaded: {
      return adapter.addMany(action.payload.tickets, {
        ...initialTicketsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    case TicketActionTypes.TicketsSaved: {

      return adapter.addOne(action.payload.tickets, {
        ...state, lastSavedTicketsId: action.payload.tickets.id
      });
    }

    case TicketActionTypes.TicketsDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getTicketState = createFeatureSelector<TicketState>('tickets');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
