import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {User} from '../../../../core/auth';
import {select, Store} from '@ngrx/store';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteUtilisateurRoutingModule {
//  entities$ = this.store.pipe(select());

  constructor(private store: Store<User>) {}


}
