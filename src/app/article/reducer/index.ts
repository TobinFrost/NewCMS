import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
  } from '@ngrx/store';

import * as fromArticle from './article.reducer';

export const reducers: ActionReducerMap<State> = {
  articles: fromArticle.reducer,
};

export interface State {
    articles: fromArticle.State;
  }

export const selectArticleState = createFeatureSelector<fromArticle.State>('articles');
 
export const selectArticleIds = createSelector(
    selectArticleState,
  fromArticle.selectArticleIds
);
export const selectArticleEntities = createSelector(
    selectArticleState,
  fromArticle.selectArticleEntities
);
export const selectAllArticles = createSelector(
    selectArticleState,
  fromArticle.selectAllArticles
);
export const selectArticleTotal = createSelector(
    selectArticleState,
  fromArticle.selectArticleTotal
);
export const selectCurrentArticleId = createSelector(
    selectArticleState,
  fromArticle.getSelectedArticleId
);
 
export const selectCurrentArticle = createSelector(
  selectArticleEntities,
  selectCurrentArticleId,
  (articleEntities, articleId) => articleEntities[articleId]
);