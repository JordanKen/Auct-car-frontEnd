import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {CookieService} from '../auth/_services/cookie.service';
import {Router} from "@angular/router";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService, public router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const userToken = this.cookieService.getCookie(environment.authTokenKey);
    if (userToken) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${userToken}`
        }
      //}
      });
      } else {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer `
        }
      });
    }
    return next.handle(request);
  }
}
