import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {SortDirection} from '../country/country-sortable.directive';
import {Vente} from '../../../../models/enchere.model';
import {Proposition} from '../../../../models/proposition';

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
  startIndex: number;
  endIndex: number;
  totalRecords: number;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

const API_USERS_URL = environment.API;

/**
 * Sort the table data

 * @param column Fetch the column
 * @param direction Sort direction Ascending or Descending
 */
function sort(tables: Vente[], column: string, direction: string): Vente[] {
  if (direction === '') {
    return tables;
  } else {
    return [...tables].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

/**
 * Table Data Match with Search input
 * @param tables Table field value fetch
 * @param term Search the value
 */
function matches(tables: Vente, term: string, pipe: PipeTransform) {
  return tables.id.toString().toLowerCase().includes(term)
    || tables.name.toString().toLowerCase().includes(term)
    || tables.name.toString().toLowerCase().includes(term);
}

@Injectable({
  providedIn: 'root'
})
export class EnchereService {
  // tslint:disable-next-line: variable-name
  private _loading$ = new BehaviorSubject<boolean>(true);
  // tslint:disable-next-line: variable-name
  private _search$ = new Subject<void>();
  // tslint:disable-next-line: variable-name
  public _tables$: Vente[];
  // tslint:disable-next-line: variable-name
  private _total$ = new BehaviorSubject<number>(0);


  // tslint:disable-next-line: variable-name
  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    startIndex: 1,
    endIndex: 10,
    totalRecords: 0
  };
  private pipe: PipeTransform;

  constructor(private http: HttpClient) {
  }

  saveProposition(proposition: Proposition): Observable<any[]> {
    console.log(proposition.userId);
    return this.http.post<any>(API_USERS_URL + 'proposition/' + proposition.saleId, {
      amount: proposition.amount,
      userId: proposition.userId,
      saleId: proposition.saleId
    });
  }

  getPropositionOfBid(id: number): Observable<any[]> {
    return this.http.get<any>(API_USERS_URL + 'proposition/' + id);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any>(API_USERS_URL + 'sale');
  }

  getBidIsPaid(userId: number, saleId: number): Observable<any[]> {
    return this.http.get<any>(API_USERS_URL + 'bidbelong/' + userId + '/' + saleId);
  }

  getOne(id: number): Observable<any[]> {
    console.log(1);
    return this.http.get<any>(API_USERS_URL + 'sale/' + id);
  }

  save(vente: Vente) {
    const fd = new FormData();
    fd.append('name', vente.name);
    fd.append('date', vente.date.toString());
    fd.append('startHour', vente.startHour.toString());
    fd.append('endHour', vente.endHour.toString());
    fd.append('vehiculeId', vente.vehiculeId.toString());
    fd.append('initPrice', vente.initPrice.toString());
    console.log(vente);
    this.http.post<any>(API_USERS_URL + 'sale', {
      name: vente.name,
      date: vente.date,
      startHour: vente.startHour,
      endHour: vente.endHour,
      vehiculeId: vente.vehiculeId,
      initPrice: vente.initPrice
    }).subscribe(
      res => {
        this._tables$ = res.response;
      }
    );
  }

}
