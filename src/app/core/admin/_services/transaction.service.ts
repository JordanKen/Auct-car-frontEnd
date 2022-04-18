import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  TransactionService {
  constructor(private http: HttpClient) {
  }


  getall(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'admin/v1/transactionable/all');
  }


}
