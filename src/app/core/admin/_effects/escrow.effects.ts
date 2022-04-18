// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {EscrowService} from '../../../core/admin/_services/escrow.service';
// State
import {AppState} from '../../../core/reducers';
import {AllEscrowRequested, EscrowMethodActionTypes, EscrowPageToggleLoading,} from '../_actions/escrow.actions';

@Injectable()
export class EscrowMethodEffects {
  showPageLoadingDistpatcher = new EscrowPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new EscrowPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new EscrowPageToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new EscrowPageToggleLoading({isLoading: false});

  @Effect()
  loadEscrowMethodPage$ = this.actions$
    .pipe(
      ofType<AllEscrowRequested>(EscrowMethodActionTypes.AllEscrowRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllEscrowRequested({
          Escrow: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: EscrowService, private store: Store<AppState>) {
  }
}
