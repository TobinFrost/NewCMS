import { Quote } from '../model';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { QuoteApiActions, QuoteCrudActions } from '../action';

// Step 1 : Define our Custom EntityState
export interface State extends EntityState<Quote> {
    selectedQuoteId: string | null;
}

// Step 2 : Define Our Adapter
export const adapter: EntityAdapter<Quote> = createEntityAdapter<Quote>({
    selectId: (quote: Quote) => quote._id,
    sortComparer: false,
});

// Step 3 : Define the initial State
export const initialState: State = adapter.getInitialState({
    selectedQuoteId: null,
});


// Finally we have our reducer
export const reducer = createReducer(
    initialState,
    on(QuoteCrudActions.loadQuote, (state) => adapter.removeAll(state)),
    on(
        QuoteApiActions.getQuoteSuccess,
         (state, {quote}) => adapter.addOne(quote, state))
)

export const getCurrentQuoteId = (state: State) => state.selectedQuoteId;

// get the selectors
const {

    selectAll
    
  } = adapter.getSelectors();

   
  // select the array of quotes
  export const selectAllQuotes = selectAll;
