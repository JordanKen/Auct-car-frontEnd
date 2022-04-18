// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {ExchangeMethodActions, ExchangeMethodActionTypes} from '../_actions/exchange.action';
// Models
import {Exchanges} from '../../../models/exchanges';

// tslint:disable-next-line:no-empty-interface
export interface ExchangeMethodState extends EntityState<Exchanges> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Exchanges> = createEntityAdapter<Exchanges>();

export const initialExchangestate: ExchangeMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function ExchangeMethodReducer(state = initialExchangestate, action: ExchangeMethodActions): ExchangeMethodState {
  switch (action.type) {
    case ExchangeMethodActionTypes.AllExchangeRequested:
      return adapter.addMany(action.payload.Exchange, {
        ...initialExchangestate,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case ExchangeMethodActionTypes.ExchangePageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case ExchangeMethodActionTypes.ExchangePageCancelled:
      return {
        ...state, listLoading: true
      };
    case ExchangeMethodActionTypes.ExchangePageLoaded: {
      return adapter.addMany(action.payload.Exchange, {
        ...initialExchangestate,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getExchangeMethodState = createFeatureSelector<ExchangeMethodState>('ExchangeMethod');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
