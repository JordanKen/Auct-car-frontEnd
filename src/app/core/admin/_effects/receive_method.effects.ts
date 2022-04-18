// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {ReceiveMethodService} from '../../../core/admin/_services/receive_method.service';
// State
import {AppState} from '../../../core/reducers';
import {
  WithdrawalMethodsActionToggleLoading,
  WithdrawalMethodsActionTypes,
  WithdrawalMethodsPageLoaded,
  WithdrawalMethodsPageToggleLoading
} from '../_actions/receive_method.actions';

@Injectable()
export class RoleEffects {
  showPageLoadingDistpatcher = new WithdrawalMethodsActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new WithdrawalMethodsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new WithdrawalMethodsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new WithdrawalMethodsActionToggleLoading({isLoading: false});

  @Effect()
  loadDepositePage$ = this.actions$
    .pipe(
      ofType<WithdrawalMethodsPageLoaded>(WithdrawalMethodsActionTypes.Withdrawal_methodsPageLoaded),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new WithdrawalMethodsPageLoaded({
          withdraw_method: response.item
        });
      }),
    );



  constructor(private actions$: Actions, private service: ReceiveMethodService, private store: Store<AppState>) {
  }
}
