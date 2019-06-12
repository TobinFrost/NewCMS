import { createAction, props } from '@ngrx/store';
import { Article } from '../model';
import { Update } from '@ngrx/entity';


export const addArticle = createAction(
    '[Article/CRUD] Add Article',
    props<{article: Article}>()
);

export const updateArticle = createAction(
    '[Article/CRUD] Update Article',
    props<{article: Update<Article>}>()
);

export const deleteArticle = createAction(
    '[Article/CRUD] Delete Article',
    props<{_id: string}>()
);