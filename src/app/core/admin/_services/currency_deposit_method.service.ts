import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency_deposit_methods} from '../../../models/currency_deposit_methods';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  CurrencyDepositMethodService {
  constructor(private http: HttpClient) {
  }
  create(currency: Currency_deposit_methods): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/currency/associatedeposit', currency);
  }
  allCurrenciesDepositMethods(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'admin/v1/currency/getallcurrenciesdepositmethods');
  }
  updateDepositMethods(currency: Currency_deposit_methods): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/currency/update/Currency_deposit_methods', currency);
  }
  deleteDepositMethods(id: number): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/currency/delete/currenciesdepositmethods', id);
  }
}
