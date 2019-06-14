import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: "", component: ArticleComponent,
  },
  {
    path: "quote", loadChildren: () => import('./quote/quote.module').then(mod => mod.QuoteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
