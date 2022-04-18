// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {CountryService} from '../../../core/admin/_services/country.service';
// State
import {AppState} from '../../../core/reducers';
import {AllCountryRequested, CountryActionTypes, CountryPageToggleLoading} from '../_actions/country.actions';

@Injectable()
export class CountryEffects {

  showPageLoadingDistpatcher = new CountryPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new CountryPageToggleLoading({isLoading: false});
  showActionLoadingDistpatcher = new CountryPageToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new CountryPageToggleLoading({isLoading: false});

  @Effect()
  loadCountryPage$ = this.actions$
    .pipe(
      ofType<AllCountryRequested>(CountryActionTypes.AllCountryRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllCountryRequested({
          country: response.response
        });
      }),
    );

  constructor(private actions$: Actions, private service: CountryService, private store: Store<AppState>) {
  }
}
