import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Article } from '../model';
import { createReducer, on } from '@ngrx/store';
import { ArticleCrudActions } from '../action';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State extends EntityState<Article> {
    selectedArticleId: string | null;
}


/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
    selectId: (article: Article) => article._id,
    sortComparer: false,
  });


/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
    selectedArticleId: null,
}); 

export const reducer = createReducer(
    initialState,
    /**
   * The addMany function provided by the created adapter
   * adds many records to the entity dictionary
   * and returns a new state including those records. If
   * the collection is to be sorted, the adapter will
   * sort each record upon entry into the sorted array.
   */

   on(ArticleCrudActions.addArticle, (state, {article}) => adapter.addOne(article, state)),
   on(ArticleCrudActions.updateArticle, (state, {article}) => adapter.updateOne( article, state)),
   on(ArticleCrudActions.deleteArticle, (state, {_id}) => adapter.removeOne(_id, state))
);

export const getSelectedArticleId = (state: State) => state.selectedArticleId;

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();
   
  // select the array of article ids
  export const selectArticleIds = selectIds;
   
  // select the dictionary of article entities
  export const selectArticleEntities = selectEntities;
   
  // select the array of articles
  export const selectAllArticles = selectAll;
   
  // select the total article count
  export const selectArticleTotal = selectTotal;