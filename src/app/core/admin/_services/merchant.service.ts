import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Merchants} from '../../../models/merchants';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  MerchantService {
  constructor(private http: HttpClient) {
  }

  // Authentication/Authorization
  create(merchant: Merchants): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/merchants/create', merchant );
  }
  delete(id): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/merchants/delete/:merchantId', id );
  }
  all(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'admin/v1/merchants/all' );
  }
}
