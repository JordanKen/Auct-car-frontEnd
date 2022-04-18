// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {EscrowMethodActions, EscrowMethodActionTypes} from '../_actions/escrow.actions';
// Models
import {Escrows} from '../../../models/escrows';

// tslint:disable-next-line:no-empty-interface
export interface EscrowMethodState extends EntityState<Escrows> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Escrows> = createEntityAdapter<Escrows>();

export const initialEscrowstate: EscrowMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function EscrowMethodReducer(state = initialEscrowstate, action: EscrowMethodActions): EscrowMethodState {
  switch (action.type) {
    case EscrowMethodActionTypes.AllEscrowRequested:
      return adapter.addMany(action.payload.Escrow, {
        ...initialEscrowstate,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case EscrowMethodActionTypes.EscrowPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case EscrowMethodActionTypes.EscrowPageCancelled:
      return {
        ...state, listLoading: true
      };
    case EscrowMethodActionTypes.EscrowPageLoaded: {
      return adapter.addMany(action.payload.Escrow, {
        ...initialEscrowstate,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getEscrowMethodState = createFeatureSelector<EscrowMethodState>('EscrowMethod');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
