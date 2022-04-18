// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {ReceiveActions, ReceiveActionTypes} from '../_actions/receive.actions';
// Models
import {Receives} from '../../../models/receives';

// tslint:disable-next-line:no-empty-interface
export interface ReceiveMethodState extends EntityState<Receives> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Receives> = createEntityAdapter<Receives>();

export const initialReceivesState: ReceiveMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function ReceivesMethodReducer(state = initialReceivesState, action: ReceiveActions): ReceiveMethodState {
  switch (action.type) {
    case ReceiveActionTypes.AllReceivesRequested:
      return adapter.addMany(action.payload.receives, {
        ...initialReceivesState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case ReceiveActionTypes.ReceivesPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case ReceiveActionTypes.ReceivesPageCancelled:
      return {
        ...state, listLoading: true
      };
    case ReceiveActionTypes.ReceivesPageLoaded: {
      return adapter.addMany(action.payload.receives, {
        ...initialReceivesState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getReceiveMethodState = createFeatureSelector<ReceiveMethodState>('ReceivesMethod');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
