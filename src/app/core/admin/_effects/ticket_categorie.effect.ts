// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {TicketcategorieService} from "../_services/ticket_categorie.service";
// State
import {AppState} from '../../../core/reducers';

import {
  TicketcategorieActionTypes,
  TicketcategoriesActionToggleLoading,
  TicketcategoriesDeleted,
  TicketcategoriesPageToggleLoading,
  TicketcategoriesSaved,
  TicketcategoriesUpdated
} from "../_actions/ticket_categorie.actions";


@Injectable()
export class TicketcategorieEffects {
  showPageLoadingDistpatcher = new TicketcategoriesActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new TicketcategoriesPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new TicketcategoriesActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new TicketcategoriesActionToggleLoading({isLoading: false});


  @Effect()
  SaveTicketcategories$ = this.actions$
    .pipe(
      ofType<TicketcategoriesSaved>(TicketcategorieActionTypes.TicketcategoriesSaved),
      mergeMap(({payload}) => {
        return this.service.save(payload.ticketcategories).pipe(
          tap(res => {
            this.store.dispatch(new TicketcategoriesSaved({ticketcategories: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );
  @Effect()
  UpdateTicketcategories$ = this.actions$
    .pipe(
      ofType<TicketcategoriesUpdated>(TicketcategorieActionTypes.TicketcategoriesUpdated),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.update(payload.ticketcategories);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );
  @Effect()
  DeleteTicketcategories$ = this.actions$
    .pipe(
      ofType<TicketcategoriesDeleted>(TicketcategorieActionTypes.TicketcategoriesDeleted),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.delete(payload.id);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );

  constructor(private actions$: Actions, private service: TicketcategorieService, private store: Store<AppState>) {
  }
}
