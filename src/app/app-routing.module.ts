import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layouts/layout.component';
import {AuthGuard} from './core/auth';
import {BodyComponent} from "./backend/user/body/body.component";

const routes: Routes = [
  {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  {
    path: 'admin',
    component: LayoutComponent,
    loadChildren: () => import('./backend/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: BodyComponent,
    loadChildren: () => import('./backend/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
