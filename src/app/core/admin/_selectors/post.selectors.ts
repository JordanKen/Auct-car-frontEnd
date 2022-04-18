// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {PostsMethodState} from '../_reducers/post.reducers';

export const selectPostMethodState = createFeatureSelector<PostsMethodState>('PostMethod');



export const selectPostMethodsPageLoading = createSelector(
  selectPostMethodState,
  PostState => {
    return PostState.listLoading;
  }
);

export const selectPostMethodsActionLoading = createSelector(
  selectPostMethodState,
  PostState => PostState.actionsloading
);

export const selectPostMethodsShowInitWaitingMessage = createSelector(
  selectPostMethodState,
  PostState => PostState.showInitWaitingMessage
);
