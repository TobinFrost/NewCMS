import * as fromQuote from './quote.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';


// First define the State

export interface State {
    quotes: fromQuote.State;
}

export const reducers: ActionReducerMap<State> = {
    quotes: fromQuote.reducer
};

export const selectQuoteState = createFeatureSelector<fromQuote.State>('quotes');


export const selectAllQuotes = createSelector(
    selectQuoteState,
    fromQuote.selectAllQuotes
);

export const selectCurrentQuoteId = createSelector(
    selectQuoteState,
    fromQuote.getCurrentQuoteId
);


export const selectCurrentQuote = createSelector(
    selectQuoteState,
    selectCurrentQuoteId,
    (quoteEntities, quoteId) => quoteEntities[quoteId]
);