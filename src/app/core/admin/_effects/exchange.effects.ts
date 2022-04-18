// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {ExchangeService} from '../../../core/admin/_services/exchange.service';
// State
import {AppState} from '../../../core/reducers';
import {AllExchangeRequested, ExchangeMethodActionTypes, ExchangePageToggleLoading,} from '../_actions/exchange.action';

@Injectable()
export class ExchangeEffects {
  showPageLoadingDistpatcher = new ExchangePageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new ExchangePageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new ExchangePageToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new ExchangePageToggleLoading({isLoading: false});

  @Effect()
  loadEscrowMethodPage$ = this.actions$
    .pipe(
      ofType<AllExchangeRequested>(ExchangeMethodActionTypes.AllExchangeRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllExchangeRequested({
          Exchange: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: ExchangeService, private store: Store<AppState>) {
  }
}
