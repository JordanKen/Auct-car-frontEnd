import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tickets} from '../../../models/tickets';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  TicketService {
  constructor(private http: HttpClient) {
  }


  save(ticket: Tickets): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/tickets/create', ticket);
  }

  delete(ticketID: number): Observable<any> {
    return this.http.delete<any>(API_USERS_URL + 'admin/v1/tickets/delete/:ticketID');
  }



}
