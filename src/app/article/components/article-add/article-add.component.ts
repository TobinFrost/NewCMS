import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Article } from '../../model';
import { Observable } from 'rxjs';
import * as fromArticle from '../../reducer';
import {ArticleCrudActions} from '../../action';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.sass']
})
export class ArticleAddComponent implements OnInit {
  articles : Observable<Article[]>;
  counter: number;
  constructor(public store: Store<{ articles: Article[]}>) {
    this.articles = store.pipe(select(fromArticle.selectAllArticles));
   }

  ngOnInit() {
    this.counter = 0;
  }

  addArticle(t: string){
    const newArticle = new Article();
    newArticle._id = "Zulu" + this.counter++;
    newArticle.title = t;
    this.store.dispatch(ArticleCrudActions.addArticle({ article: newArticle}));
  }

 

}
