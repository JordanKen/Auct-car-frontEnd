import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticketcomments} from '../../../models/ticketcomments';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  TicketcommentService {
  constructor(private http: HttpClient) {
  }


  save(ticketComment: Ticketcomments): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/ticketcomment/create', ticketComment);
  }

  delete(ticketcommentID: number): Observable<any> {
    return this.http.delete<any>(API_USERS_URL + 'admin/v1/ticketcomment/delete/:ticketcommentId');
  }



}
