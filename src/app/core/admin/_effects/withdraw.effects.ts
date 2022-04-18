// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {ReceiveService} from '../../../core/admin/_services/receive.service';
// State
import {AppState} from '../../../core/reducers';
import {
  AllWithdrawsRequested,
  WithDrawActionTypes,
  WithdrawsActionToggleLoading,
  WithdrawsPageToggleLoading
} from '../_actions/withdraw.actions';

@Injectable()
export class WithdrawEffects {
  showPageLoadingDistpatcher = new WithdrawsActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new WithdrawsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new WithdrawsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new WithdrawsActionToggleLoading({isLoading: false});

  @Effect()
  loadDepositePage$ = this.actions$
    .pipe(
      ofType<AllWithdrawsRequested>(WithDrawActionTypes.AllWithdrawsRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllWithdrawsRequested({
          receives: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: ReceiveService, private store: Store<AppState>) {
  }
}
