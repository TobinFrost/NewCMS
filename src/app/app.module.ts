import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './article/reducer';
import { ArticleListComponent } from './article/components/article-list/article-list.component';
import { ArticleAddComponent } from './article/components/article-add/article-add.component'

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ articles: reducers.articles}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
