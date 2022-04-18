// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {PostService} from '../../../core/admin/_services/post.service';
// State
import {AppState} from '../../../core/reducers';
import {PostsMethodState} from '../_reducers/post.reducers';
import {
  PostsDeleted,
  PostsCreated,
  AllPostsRequested,
  PostsPageCancelled,
  PostsPageToggleLoading,
  PostsPageRequested,
  PostsActionToggleLoading,
  PostsActionTypes
} from '../_actions/post.actions';



@Injectable()
export class ExchangeEffects {
  showPageLoadingDistpatcher = new PostsPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new PostsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new PostsPageToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new PostsPageToggleLoading({isLoading: false});

  @Effect()
  createMerchant$ = this.actions$
    .pipe(
      ofType<PostsCreated>(PostsActionTypes.PostsCreated),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showActionLoadingDistpatcher);
        return this.service.create(payload.post).pipe(
          tap(res => {
            this.store.dispatch(new PostsCreated({post: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );


  constructor(private actions$: Actions, private service: PostService, private store: Store<AppState>) {
  }
}
