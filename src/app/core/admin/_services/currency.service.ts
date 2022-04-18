import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currencies} from '../../../models/currencies';
import {Currency_deposit_methods} from '../../../models/currency_deposit_methods';
import {Currency_withdrawal_methods} from '../../../models/currency_withdrawal_methods';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  CurrencyService {
  constructor(private http: HttpClient) {
  }

  all(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'admin/v1/currency/all' );
  }

  create(currency: Currencies): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/currency/create', currency);
  }
}
