// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {WalletService} from "../_services/wallet.service";
// State
import {AppState} from '../../../core/reducers';

import {
  WalletActionTypes,
  WalletsActionToggleLoading,
  WalletsPageToggleLoading,
  WalletsSaved,
  WalletsUpdatedAmount
} from "../_actions/wallet.actions";


@Injectable()
export class WalletEffects {
   showPageLoadingDistpatcher = new WalletsActionToggleLoading({isLoading: true});
   hidePageLoadingDistpatcher = new WalletsPageToggleLoading({isLoading: false});

   showActionLoadingDistpatcher = new WalletsActionToggleLoading({isLoading: true});
   hideActionLoadingDistpatcher = new WalletsActionToggleLoading({isLoading: false});

  // @Effect()
  // loadSettingsPage$ = this.actions$
  //   .pipe(
  //     ofType<AllSettingsRequested>(SettingActionTypes.AllSettingsRequested),
  //     mergeMap(() => {
  //       this.store.dispatch(this.showPageLoadingDistpatcher);
  //       return this.service.all();
  //     }),
  //     map(response => {
  //       return new AllSettingsRequested({
  //         settings: response.items
  //       });
  //     }),
  //   );
  @Effect()
  SaveWallets$ = this.actions$
    .pipe(
      ofType<WalletsSaved>(WalletActionTypes.WalletsSaved),
      mergeMap(({payload}) => {
        return this.service.save(payload.wallets).pipe(
          tap(res => {
            this.store.dispatch(new WalletsSaved({wallets: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );
  @Effect()
  UpdateWallets$ = this.actions$
    .pipe(
      ofType<WalletsUpdatedAmount>(WalletActionTypes.WalletsUpdatedAmount),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.updateAmount(payload.wallets);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );


  constructor(private actions$: Actions, private service: WalletService, private store: Store<AppState>) {
  }
}
