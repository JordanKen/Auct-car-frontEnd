// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {CategoryService} from '../../../core/admin/_services/category.service';
// State
import {AppState} from '../../../core/reducers';
import {
  CategoryActionTypes,
  CategoryCreated,
  CategoryMethodsActionToggleLoading,
  CategoryMethodsPageLoaded,
  CategoryMethodsPageToggleLoading,
} from '../_actions/categories.actions';
import {UserCreated} from '../../auth';

@Injectable()
export class CategoriesEffects {
  showPageLoadingDistpatcher = new CategoryMethodsPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new CategoryMethodsActionToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new CategoryMethodsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new CategoryMethodsActionToggleLoading({isLoading: false});

  @Effect()
  loadCategoriesPage$ = this.actions$
    .pipe(
      ofType<CategoryMethodsPageLoaded>(CategoryActionTypes.CategoryMethodsPageLoaded),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new CategoryMethodsPageLoaded({
          categories: response.items
        });
      }),
    );
  @Effect()
  createCategory = this.actions$
    .pipe(
      ofType<CategoryCreated>(CategoryActionTypes.CategoryCreated),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showActionLoadingDistpatcher);
        return this.service.create(payload.category).pipe(
          tap(res => {
            this.store.dispatch(new UserCreated({user: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );
  constructor(private actions$: Actions, private service: CategoryService, private store: Store<AppState>) {
  }
}
