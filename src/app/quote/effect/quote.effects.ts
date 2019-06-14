import { QuoteService } from '../service/quote.service';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { QuoteApiActions, QuoteCrudActions } from '../action';
import { map, switchMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { Quote } from '../model';

@Injectable()
export class QuoteEffects {

    id_counter: number;

    loadQuote$ = createEffect(() => this.actions$.pipe(
        ofType(QuoteCrudActions.loadQuote),
        switchMap(() => this.quoteService.getKanyeQuote().pipe(
            map((theQuote: Quote) => 
                {
                    theQuote._id = "Yeezy" + this.id_counter++;
                    console.log(theQuote);
                    return (QuoteApiActions.getQuoteSuccess({ quote: theQuote }));
                }
            )
        )),
        catchError(() => EMPTY)
    ));

    constructor(private actions$: Actions,private quoteService: QuoteService){
        this.id_counter = 0;
    }
}