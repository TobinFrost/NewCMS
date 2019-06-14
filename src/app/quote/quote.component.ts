import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Quote } from './model';
import { Observable } from 'rxjs';

import * as fromQuote from './reducer';
import { QuoteCrudActions } from './action';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.sass']
})
export class QuoteComponent implements OnInit {

  todayQuotes: Observable<Quote[]>;
  constructor(private store: Store<{quotes: Quote[]}>) {
    this.todayQuotes = this.store.pipe(select(fromQuote.selectAllQuotes));
   }

  ngOnInit() {
    this.store.dispatch(QuoteCrudActions.loadQuote());
    
  }

  loadNewQuote(){
    this.store.dispatch(QuoteCrudActions.loadQuote());
  }

}
