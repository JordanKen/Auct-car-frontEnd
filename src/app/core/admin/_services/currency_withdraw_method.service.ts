import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency_withdrawal_methods} from '../../../models/currency_withdrawal_methods';
import {environment} from '../../../../environments/environment';
import {Currency_deposit_methods} from '../../../models/currency_deposit_methods';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  CurrencyWithdrawMethodService {
  constructor(private http: HttpClient) {
  }
  create(currency: Currency_withdrawal_methods): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/currency/associatewithdrawal', currency);
  }
  allCurrenciesWithdrawMethods(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'admin/v1/currency/getallcurrencieswithdrawmethods');
  }
  updateWithdrawMethods(currency: Currency_withdrawal_methods): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/currency/update/currenciesdepositmethods', currency);
  }
  deleteWithdrawMethods(id: number): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/currency/delete/currencieswithdrawmethods', id);
  }
}
