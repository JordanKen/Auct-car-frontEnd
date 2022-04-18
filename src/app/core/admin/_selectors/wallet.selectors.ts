// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {WalletState} from '../_reducers/wallet.reducers';

export const selectWalletState = createFeatureSelector<WalletState>('wallets');

export const selectWalletsById = (walletId: number) => createSelector(
  selectWalletState,
  walletState => walletState.entities[walletId]
);
export const selectWalletsPageLoading = createSelector(
  selectWalletState,
  walletsState => {
    return walletsState.listLoading;
  }
);

export const selectWalletsActionLoading = createSelector(
  selectWalletState,
  walletsState => walletsState.actionsloading
);

export const selectWalletshowInitWaitingMessage = createSelector(
  selectWalletState,
  walletsState => walletsState.showInitWaitingMessage
);
