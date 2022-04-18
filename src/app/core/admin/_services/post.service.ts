import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posts} from '../../../models/posts';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  PostService {
  constructor(private http: HttpClient) {
  }

  // Authentication/Authorization
  create(post: Posts): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/post/create', post );
  }

}
