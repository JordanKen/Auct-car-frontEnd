// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {TicketcategorieActions, TicketcategorieActionTypes} from '../_actions/ticket_categorie.actions';
// Models
import {Ticketcategories} from '../../../models/ticketcategories';

// tslint:disable-next-line:no-empty-interface
export interface TicketcategorieState extends EntityState<Ticketcategories> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Ticketcategories> = createEntityAdapter<Ticketcategories>();

export const initialTicketcategoriesState: TicketcategorieState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function TicketcategoriesReducer(state = initialTicketcategoriesState, action:  TicketcategorieActions): TicketcategorieState {
  switch (action.type) {

    case TicketcategorieActionTypes.TicketcategoriesPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case TicketcategorieActionTypes.TicketcategoriesPageCancelled:
      return {
        ...state, listLoading: true
      };
    case TicketcategorieActionTypes.TicketcategoriesPageLoaded: {
      return adapter.addMany(action.payload.ticketcategories, {
        ...initialTicketcategoriesState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    case TicketcategorieActionTypes.TicketcategoriesSaved: {

      return adapter.addOne(action.payload.ticketcategories, {
        ...state, lastSavedTicketcategoriesId: action.payload.ticketcategories.id
      });
    }
    case TicketcategorieActionTypes.TicketcategoriesUpdated: {
      return adapter.updateOne(action.payload.partialticketcategories, state);
    }
    case TicketcategorieActionTypes.TicketcategoriesDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getTicketcategorieState = createFeatureSelector<TicketcategorieState>('ticketcategories');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
