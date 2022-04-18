// NGRX
import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
// CRUD
import {Wallets} from '../../../models/wallets';

export enum WalletActionTypes {
 WalletsPageRequested = '[Wallets List Page] Wallets Page Requested',
 WalletsPageLoaded = '[Wallets API] Wallets Page Loaded',
 WalletsPageCancelled = '[Wallets API] Wallets Page Cancelled',
 WalletsPageToggleLoading = '[Wallets] Wallets Page Toggle Loading',
 WalletsActionToggleLoading = '[Wallets] Wallets Action Toggle Loading',
  WalletsSaved = '[Save Wallets] Wallets ASaved',
  WalletsUpdatedAmount = '[Update Wallets Amount] Wallets Amount Updated ',
 // SettingsDeleted = '[Delete Settings] Settings Deleted',

}

// export class AllWalletsRequested implements Action {
//   readonly type = WalletActionTypes.AllWalletsRequested;
//   constructor(public payload: { wallets: Wallets[] }) {
//   }
// }

export class WalletsPageRequested implements Action {
  readonly type = WalletActionTypes.WalletsPageRequested;
}

export class WalletsPageLoaded implements Action {
  readonly type = WalletActionTypes.WalletsPageLoaded;

  constructor(public payload: { wallets: Wallets[] }) {
  }
}


export class WalletsPageCancelled implements Action {
  readonly type = WalletActionTypes.WalletsPageCancelled;
}

export class WalletsPageToggleLoading implements Action {
  readonly type = WalletActionTypes.WalletsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class WalletsActionToggleLoading implements Action {
  readonly type = WalletActionTypes.WalletsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}
export class WalletsSaved implements Action {
  readonly type = WalletActionTypes.WalletsSaved;

  constructor(public payload: { wallets: Wallets }) {
  }
}
export class WalletsUpdatedAmount implements Action {
  readonly type = WalletActionTypes.WalletsUpdatedAmount;

  constructor(public payload: {
    partialWallets: Update<Wallets>,
    wallets: Wallets
  }) {
  }
}
// export class SettingsDeleted implements Action {
//   readonly type = SettingActionTypes.SettingsDeleted;
//
//   constructor(public payload: { id: number }) {
//   }
// }
export type WalletActions = WalletsSaved
  |WalletsUpdatedAmount
  |WalletsPageRequested
  |WalletsPageLoaded
  |WalletsPageCancelled
  |WalletsPageToggleLoading
  |WalletsActionToggleLoading
  ;
