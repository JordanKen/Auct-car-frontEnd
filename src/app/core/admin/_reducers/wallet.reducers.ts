// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {WalletActions, WalletActionTypes} from '../_actions/wallet.actions';
// Models
import {Wallets} from '../../../models/wallets';


// tslint:disable-next-line:no-empty-interface
export interface WalletState extends EntityState<Wallets> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Wallets> = createEntityAdapter<Wallets>();

export const initialWalletsState: WalletState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function WalletsReducer(state = initialWalletsState, action:  WalletActions): WalletState {
  switch (action.type) {
    // case WalletActionTypes.AllWalletsRequested:
    //   return adapter.addMany(action.payload.settings, {
    //     ...initialSettingsState,
    //     listLoading: false,
    //     showInitWaitingMessage: false
    //   });
    case WalletActionTypes.WalletsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case WalletActionTypes.WalletsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case WalletActionTypes.WalletsPageLoaded: {
      return adapter.addMany(action.payload.wallets, {
        ...initialWalletsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    case WalletActionTypes.WalletsSaved: {
      // return adapter.addMany(action.payload.wallets, {
      //   ...initialWalletsState,
      //   listLoading: false,
      //   showInitWaitingMessage: false
      // });
      return adapter.addOne(action.payload.wallets, {
        ...state, lastSavedWalletsId: action.payload.wallets.id
      });
    }
    case WalletActionTypes.WalletsUpdatedAmount: {
      return adapter.updateOne(action.payload.partialWallets, state);
    }

    default:
      return state;
  }
}

export const getWalletState = createFeatureSelector<WalletState>('wallets');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
