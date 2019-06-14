import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromQuote from './reducer'
import { EffectsModule } from '@ngrx/effects';
import { QuoteEffects } from './effect/quote.effects';
import { QuoteRoutingModule } from './quote-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        QuoteRoutingModule,
        StoreModule.forFeature('quotes',fromQuote.reducers.quotes),
        EffectsModule.forFeature([QuoteEffects])
        
    ],
    declarations: [
        QuoteComponent
    ],
    exports: [
        QuoteComponent
    ],
    providers: []
})
export class QuoteModule {}