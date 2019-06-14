import {createAction, props} from '@ngrx/store';
import { Quote } from '../model';


export const getQuoteSuccess = createAction(
    '[Quotes/API] Get Quote Success',
    props<{quote: Quote}>()
)