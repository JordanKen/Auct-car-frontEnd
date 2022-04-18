import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlesComponent} from './articles/articles.component';
import {CategorieArticlesComponent} from './categorie-articles/categorie-articles.component';

const routes: Routes = [
  {
    path: 'posts',
    component: ArticlesComponent
  },
  {
    path: 'cat-post',
    component: CategorieArticlesComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
