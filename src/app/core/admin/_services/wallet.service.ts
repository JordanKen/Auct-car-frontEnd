import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wallets} from '../../../models/wallets';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  WalletService {
  constructor(private http: HttpClient) {
  }


  save(wallet: Wallets): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/wallets/create', wallet);
  }
  updateAmount(wallet: Wallets): Observable<any> {
    return this.http.put<any>(API_USERS_URL + 'admin/v1/wallets/update', wallet);
  }


}
