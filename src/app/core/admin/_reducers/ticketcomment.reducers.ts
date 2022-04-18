// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {TicketcommentActions, TicketcommentActionTypes} from '../_actions/ticket_comment.actions';
// Models
import {Ticketcomments} from '../../../models/ticketcomments';

// tslint:disable-next-line:no-empty-interface
export interface TicketcommentState extends EntityState<Ticketcomments> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Ticketcomments> = createEntityAdapter<Ticketcomments>();

export const initialTicketcommentsState: TicketcommentState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function TicketcommentsReducer(state = initialTicketcommentsState, action:  TicketcommentActions): TicketcommentState {
  switch (action.type) {

    case TicketcommentActionTypes.TicketcommentsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case TicketcommentActionTypes.TicketcommentsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case TicketcommentActionTypes.TicketcommentsPageLoaded: {
      return adapter.addMany(action.payload.ticketcomments, {
        ...initialTicketcommentsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    case TicketcommentActionTypes.TicketcommentsSaved: {

      return adapter.addOne(action.payload.ticketcomments, {
        ...state, lastSavedTicketcommentsId: action.payload.ticketcomments.id
      });
    }

    case TicketcommentActionTypes.TicketcommentsDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getTicketcommentsState = createFeatureSelector<TicketcommentState>('ticketcomments');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
