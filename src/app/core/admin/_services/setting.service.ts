import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Settings} from '../../../models/settings';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  SettingsService {
  constructor(private http: HttpClient) {
  }


  all(key: any): Observable<any> {
    return this.http.get<any>(API_USERS_URL + 'admin/v1/settings/getvaluebykey', key);
  }
  save(setting: Settings): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/settings/save', setting);
  }
  update(setting: Settings): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/settings/update', setting);
  }
  delete(settingId: number ): Observable<any> {
    return this.http.delete<any>(API_USERS_URL + 'admin/v1/settings/delete/:settingId');
  }



}
