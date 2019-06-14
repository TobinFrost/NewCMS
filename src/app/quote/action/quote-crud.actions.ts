import {createAction, props} from '@ngrx/store';
import { Quote } from '../model';
export const loadQuote = createAction(
    '[Quotes/CRUD] Load Quote '
)