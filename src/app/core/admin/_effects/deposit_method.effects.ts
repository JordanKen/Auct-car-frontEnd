// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {SendsMethodService} from '../../../core/admin/_services/sends_method.service';
// State
import {AppState} from '../../../core/reducers';
import {
  AllDepositMethodsRequested,
  DepositMethodActionTypes,
  DepositMethodsPageToggleLoading,
} from '../_actions/deposit_method.actions';

@Injectable()
export class DepositMethodEffects {
  showPageLoadingDistpatcher = new DepositMethodsPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new DepositMethodsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new DepositMethodsPageToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new DepositMethodsPageToggleLoading({isLoading: false});

  @Effect()
  loadDepositeMethodPage$ = this.actions$
    .pipe(
      ofType<AllDepositMethodsRequested>(DepositMethodActionTypes.AllDepositMethodsRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllDepositMethodsRequested({
          deposits: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: SendsMethodService, private store: Store<AppState>) {
  }
}
