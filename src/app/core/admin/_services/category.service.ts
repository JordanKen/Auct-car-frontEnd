import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categories} from '../../../models/categories';
import {environment} from '../../../../environments/environment';


const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  CategoryService {
  constructor(private http: HttpClient) {
  }

  // Authentication/Authorization
  create(category: Categories): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/category/create', category );
  }

  all(): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'admin/v1/category/all' );
  }

}
