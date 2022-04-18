// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {CategorieState} from '../_reducers/categories.reducers';

export const selectCategoryState = createFeatureSelector<CategorieState>('categories');



export const selectCategoriesPageLoading = createSelector(
  selectCategoryState,
  depositsState => {
    return depositsState.listLoading;
  }
);

export const selectCategoriesActionLoading = createSelector(
  selectCategoryState,
  depositsState => depositsState.actionsloading
);

export const selectCategoriesShowInitWaitingMessage = createSelector(
  selectCategoryState,
  depositsState => depositsState.showInitWaitingMessage
);
export const selectCategoryById = (categoryId: number) => createSelector(
  selectCategoryState,
  categoryState => categoryState.entities[categoryId]
);
