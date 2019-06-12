import { createAction, props } from '@ngrx/store';
import { Article } from '../model';

/* 
*   Add Article Actions
*
*/
export const addArticleSuccess = createAction(
    '[Article/API] Add Article Success',
    props<{article: Article}>()
);

export const addArticleFailure = createAction(
    '[Article/API] Add Book Fail',
    props<{article: Article}>()
)