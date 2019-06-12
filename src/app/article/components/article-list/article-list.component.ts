import { Component, OnInit } from '@angular/core';
import { Article } from '../../model';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromArticle from '../../reducer';
import {ArticleCrudActions} from '../../action';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {

  articles : Observable<Article[]>;

  constructor(public store: Store<{ articles: Article[]}>) { 
    this.articles = store.pipe(select(fromArticle.selectAllArticles));
  }

  removeArticle(id: string){
    this.store.dispatch(ArticleCrudActions.deleteArticle({_id: id}));
  }

  ngOnInit() {
  }

}
