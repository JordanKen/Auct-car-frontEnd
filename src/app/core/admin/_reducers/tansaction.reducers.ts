// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {TransactionActions, TransactionActionTypes} from '../_actions/transaction.actions';
// Models
import {Transactionable} from '../../../models/transactionable';

// tslint:disable-next-line:no-empty-interface
export interface TransactionableState extends EntityState<Transactionable> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Transactionable> = createEntityAdapter<Transactionable>();

export const initialTransactionableState: TransactionableState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function TransactionReducer(state = initialTransactionableState, action:  TransactionActions): TransactionableState {
  switch (action.type) {
    case TransactionActionTypes.AllTransactionsRequested:
      return adapter.addMany(action.payload.transactionable, {
        ...initialTransactionableState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case TransactionActionTypes.TransactionsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case TransactionActionTypes.TransactionsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case TransactionActionTypes.TransactionsPageLoaded: {
      return adapter.addMany(action.payload.Transactionable, {
        ...initialTransactionableState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getTransactionState = createFeatureSelector<Transactionable>('Transactions');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
