// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {CategoryActions, CategoryActionTypes} from '../_actions/categories.actions';
// Models
import {Categories} from '../../../models/categories';

// tslint:disable-next-line:no-empty-interface
export interface CategorieState extends EntityState<Categories> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Categories> = createEntityAdapter<Categories>();

export const initialDepositsState: CategorieState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function depositsMethodReducer(state = initialDepositsState, action: CategoryActions): CategorieState {
  switch (action.type) {
    case CategoryActionTypes.CategoryCreated:
      return adapter.addOne(action.payload.category, {
        ...state, lastCreatedCategoryId: action.payload.category.id
      });
    case CategoryActionTypes.CategoryMethodsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case CategoryActionTypes.CategoryMethodsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case CategoryActionTypes.CategoryMethodsPageLoaded: {
      return adapter.addMany(action.payload.categories, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getDepositMethodState = createFeatureSelector<CategorieState>('categories');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
