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
import {AllReceivesRequested, ReceiveActionTypes, ReceivesPageToggleLoading} from '../_actions/receive.actions';


@Injectable()
export class ExchangeEffects {
  showPageLoadingDistpatcher = new ReceivesPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new ReceivesPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new ReceivesPageToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new ReceivesPageToggleLoading({isLoading: false});


  @Effect()
  loadEscrowMethodPage$ = this.actions$
    .pipe(
      ofType<AllReceivesRequested>(ReceiveActionTypes.AllReceivesRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllReceivesRequested({
          receives: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: ReceiveService, private store: Store<AppState>) {
  }
}
