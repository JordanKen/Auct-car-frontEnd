// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {SendService} from '../../../core/admin/_services/send.service';
// State
import {AppState} from '../../../core/reducers';
import {
  AllDepositsRequested,
  DepositActionTypes,
  DepositsActionToggleLoading,
  DepositsPageToggleLoading
} from '../_actions/deposite.actions';

@Injectable()
export class DepositEffects {
  showPageLoadingDistpatcher = new DepositsActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new DepositsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new DepositsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new DepositsActionToggleLoading({isLoading: false});

  @Effect()
  loadDepositePage$ = this.actions$
    .pipe(
      ofType<AllDepositsRequested>(DepositActionTypes.AllDepositsRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllDepositsRequested({
          deposits: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: SendService, private store: Store<AppState>) {
  }
}
