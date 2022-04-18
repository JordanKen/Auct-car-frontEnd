// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {RoleActions, PostsActionTypes} from '../_actions/post.actions';
// Models
import {Posts} from '../../../models/posts';
// tslint:disable-next-line:no-empty-interface
export interface PostsMethodState extends EntityState<Posts> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Posts> = createEntityAdapter<Posts>();

export const initialPostsState: PostsMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});
export function PostsMethodReducer(state = initialPostsState, action: RoleActions): PostsMethodState {
  switch (action.type) {

    case PostsActionTypes.PostsCreated:
      return adapter.addOne(action.payload.post, {
        ...state, lastCreatedPostsId: action.payload.post.id
      });

    case PostsActionTypes.PostsDeleted:
      return adapter.removeOne(action.payload.id, state);

    case PostsActionTypes.AllPostsRequested:
      return adapter.addMany(action.payload.post, {
        ...initialPostsState,
        listLoading: false,
        showInitWaitingMessage: false
      });

    case PostsActionTypes.PostsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };

    case PostsActionTypes.PostsPageCancelled:
      return {
        ...state, listLoading: true
      };

    case PostsActionTypes.PostsPageLoaded: {
      return adapter.addMany(action.payload.post, {
        ...initialPostsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getPostsMethodState = createFeatureSelector<PostsMethodState>('PostsMethod');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
