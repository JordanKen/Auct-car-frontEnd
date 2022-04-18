// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// RxJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
// Auth reducers and selectors
import { AppState} from '../../../core/reducers/';
import { isLoggedIn } from '../_selectors/auth.selectors';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../_services";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router, private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.auth.isAdmin()
      .pipe(
        tap(user => {
          console.log(user.response);
          if(!user.response){
            this.router.navigate([''], { queryParams: { returnUrl: state.url } })
          }
        })
      );
  }

}
