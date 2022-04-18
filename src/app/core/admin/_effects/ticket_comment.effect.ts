// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {TicketcommentService} from "../_services/ticket_comment.service";
// State
import {AppState} from '../../../core/reducers';

import {
  TicketcommentActionTypes,
  TicketcommentsActionToggleLoading,
  TicketcommentsDeleted,
  TicketcommentsPageToggleLoading,
  TicketcommentsSaved
} from "../_actions/ticket_comment.actions";


@Injectable()
export class TicketcommentEffects {
  showPageLoadingDistpatcher = new TicketcommentsActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new TicketcommentsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new TicketcommentsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new TicketcommentsActionToggleLoading({isLoading: false});

  @Effect()
  SaveTicketcomments$ = this.actions$
    .pipe(
      ofType<TicketcommentsSaved>(TicketcommentActionTypes.TicketcommentsSaved),
      mergeMap(({payload}) => {
        return this.service.save(payload.ticketcomments).pipe(
          tap(res => {
            this.store.dispatch(new TicketcommentsSaved({ticketcomments: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );

  @Effect()
  DeleteTicketcomments$ = this.actions$
    .pipe(
      ofType<TicketcommentsDeleted>(TicketcommentActionTypes.TicketcommentsDeleted),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.delete(payload.id);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );

  constructor(private actions$: Actions, private service: TicketcommentService, private store: Store<AppState>) {
  }
}
