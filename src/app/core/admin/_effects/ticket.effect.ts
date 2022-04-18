// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {TicketService} from "../_services/ticket.service";
// State
import {AppState} from '../../../core/reducers';
import {
  TicketActionTypes,
  TicketsActionToggleLoading,
  TicketsDeleted,
  TicketsPageToggleLoading,
  TicketsSaved
} from "../_actions/ticket.actions";


@Injectable()
export class TicketEffects {
  showPageLoadingDistpatcher = new TicketsActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new TicketsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new TicketsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new TicketsActionToggleLoading({isLoading: false});

  @Effect()
  SaveTickets$ = this.actions$
    .pipe(
      ofType<TicketsSaved>(TicketActionTypes.TicketsSaved),
      mergeMap(({payload}) => {
        return this.service.save(payload.tickets).pipe(
          tap(res => {
            this.store.dispatch(new TicketsSaved({tickets: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );

  @Effect()
  DeleteTickets$ = this.actions$
    .pipe(
      ofType<TicketsDeleted>(TicketActionTypes.TicketsDeleted),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.delete(payload.id);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );

  constructor(private actions$: Actions, private service: TicketService, private store: Store<AppState>) {
  }
}
