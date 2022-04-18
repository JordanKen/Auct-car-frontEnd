// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {MerchantService} from '../../../core/admin/_services/merchant.service';
// State
import {AppState} from '../../../core/reducers';
import {
  AllMerchantRequested,
  CreateMerchantRequested,
  DeleteMerchantRequested,
  MerchantMethodActionTypes,
  MerchantPageToggleLoading
} from '../_actions/merchant.actions';

@Injectable()
export class ExchangeEffects {
  showPageLoadingDistpatcher = new MerchantPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new MerchantPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new MerchantPageToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new MerchantPageToggleLoading({isLoading: false});

  @Effect()
  createMerchant$ = this.actions$
    .pipe(
      ofType<CreateMerchantRequested>(MerchantMethodActionTypes.CreateMerchantRequested),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showActionLoadingDistpatcher);
        return this.service.create(payload.merchants).pipe(
          tap(res => {
            this.store.dispatch(new CreateMerchantRequested({merchants: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );

  @Effect()
  deleteMerchant$ = this.actions$
    .pipe(
      ofType<DeleteMerchantRequested>(MerchantMethodActionTypes.DeleteMerchantRequested),
      mergeMap(({payload}) => {
          this.store.dispatch(this.showActionLoadingDistpatcher);
          return this.service.delete(payload.id);
        }
      ),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );

  @Effect()
  loadEscrowMethodPage$ = this.actions$
    .pipe(
      ofType<AllMerchantRequested>(MerchantMethodActionTypes.AllMerchantRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllMerchantRequested({
          merchants: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: MerchantService, private store: Store<AppState>) {
  }
}
