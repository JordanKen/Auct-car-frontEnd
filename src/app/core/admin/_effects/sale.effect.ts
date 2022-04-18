// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {PurchaseService} from '../../../core/admin/_services/sale.service';
// State
import {AppState} from '../../../core/reducers';
import {
  AllSalesRequested,
  SaleActionTypes,
  SalesActionToggleLoading,
  SalesPageToggleLoading
} from "../_actions/sale.actions";


@Injectable()
export class SaleEffects {
  showPageLoadingDistpatcher = new SalesActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new SalesPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new SalesActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new SalesActionToggleLoading({isLoading: false});

  @Effect()
  loadSalePage$ = this.actions$
    .pipe(
      ofType<AllSalesRequested>(SaleActionTypes.AllSalesRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllSalesRequested({
          sales: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: PurchaseService, private store: Store<AppState>) {
  }
}
