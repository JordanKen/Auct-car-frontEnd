import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency_exchange_rates} from '../../../models/currency_exchange_rates';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  CurrencyExchangeRateService {
  constructor(private http: HttpClient) {
  }


  all(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'admin/v1/currency/currencyexchangerates/all');
  }
  create(currencyExchangeRate: Currency_exchange_rates): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/currency/currencyexchangerates/create', currencyExchangeRate);
  }

}
