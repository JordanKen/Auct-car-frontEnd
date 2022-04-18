// NGRX
import {Action} from '@ngrx/store';
import {Update} from '@ngrx/entity';
// CRUD
import {Posts} from '../../../models/posts';



export enum PostsActionTypes {
  AllPostsRequested = '[Posts Module] All Posts Requested',
  PostsCreated= '[Posts Module] Posts Created',
  PostsDeleted = '[Posts Module] Posts Deleted',
  PostsPageRequested = '[Posts List Page] Posts Page Requested',
  PostsPageLoaded = '[Posts API] Posts Page Loaded',
  PostsPageCancelled = '[Posts API] Posts Page Cancelled',
  PostsPageToggleLoading = '[Posts] Posts Page Toggle Loading',
  PostsActionToggleLoading = '[Posts] Posts Action Toggle Loading'
}

export class AllPostsRequested implements Action {
  readonly type = PostsActionTypes.AllPostsRequested;
  constructor(public payload: { post: Posts[] }) {
  }
}

export class PostsDeleted implements Action {
  readonly type = PostsActionTypes.PostsDeleted;

  constructor(public payload: { id: number }) {
  }
}
export class PostsCreated implements Action {
  readonly type = PostsActionTypes.PostsCreated;
  constructor(public payload: { post: Posts }) {
  }
}

export class PostsPageRequested implements Action {
  readonly type = PostsActionTypes.PostsPageRequested;
}


export class PostsPageLoaded implements Action {
  readonly type = PostsActionTypes.PostsPageLoaded;

  constructor(public payload: { post: Posts[] }) {
  }
}


export class PostsPageCancelled implements Action {
  readonly type = PostsActionTypes.PostsPageCancelled;
}

export class PostsPageToggleLoading implements Action {
  readonly type = PostsActionTypes.PostsPageToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export class PostsActionToggleLoading implements Action {
  readonly type = PostsActionTypes.PostsActionToggleLoading;

  constructor(public payload: { isLoading: boolean }) {
  }
}

export type RoleActions = PostsPageLoaded
  | PostsDeleted
  | PostsCreated
  | AllPostsRequested
  | PostsPageCancelled
  | PostsPageToggleLoading
  | PostsPageRequested
  | PostsActionToggleLoading;
