// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
// State
import {AppState} from '../../../core/reducers';
import {
  PurchaseCreated,
  PurchasesActionToggleLoading,
  PurchasesActionTypes,
  PurchasesPageToggleLoading
} from '../_actions/purchase.actions';
import {PurchaseService} from '../_services/purchase.service';

@Injectable()
export class RoleEffects {
  showPageLoadingDistpatcher = new PurchasesActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new PurchasesPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new PurchasesActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new PurchasesActionToggleLoading({isLoading: false});

  @Effect()
  createPurchasePage$ = this.actions$
    .pipe(
      ofType<PurchaseCreated>(PurchasesActionTypes.PurchasesCreated),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.create();
      }),
      map(response => {
        return new PurchaseCreated({
          purchase: response.items
        });
      }),
    );


  constructor(private actions$: Actions, private service: PurchaseService, private store: Store<AppState>) {
  }
}
