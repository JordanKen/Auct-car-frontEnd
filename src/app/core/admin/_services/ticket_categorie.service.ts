import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticketcategories} from '../../../models/ticketcategories';
import {environment} from '../../../../environments/environment';

const API_USERS_URL = environment.API;

@Injectable({providedIn: 'root'})
export class  TicketcategorieService {
  constructor(private http: HttpClient) {
  }


  save(ticketCategorie: Ticketcategories): Observable<any> {
    return this.http.post<any>(API_USERS_URL + 'admin/v1/ticketcategorie/create', ticketCategorie);
  }
  update(ticketCategorie: Ticketcategories): Observable<any> {
    return this.http.put<any>(API_USERS_URL + 'admin/v1/ticketcategorie/update', ticketCategorie);
  }
  delete(ticketcategorieID: number): Observable<any> {
    return this.http.delete<any>(API_USERS_URL + 'admin/v1/tickets/delete/:ticketCategorieId');
  }



}
