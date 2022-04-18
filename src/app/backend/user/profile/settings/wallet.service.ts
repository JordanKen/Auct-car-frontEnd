import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {SortDirection} from "../../../admin/operations/marques/depot-sortable.directive";
import {environment} from "../../../../../environments/environment";
import {Wallets} from "../../../../models/wallets";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../../models/users";

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
function sort(tables: Wallets[], column: string, direction: string): Wallets[] {
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
function matches(tables: Wallets, term: string, pipe: PipeTransform) {
  return tables.id.toString().toLowerCase().includes(term)
    || tables.user_id.toString().toLowerCase().includes(term)
}

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  // tslint:disable-next-line: variable-name
  private _loading$ = new BehaviorSubject<boolean>(true);
  // tslint:disable-next-line: variable-name
  private _search$ = new Subject<void>();
  // tslint:disable-next-line: variable-name
  public _tables$: Wallets[];
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

  getWallet(): Observable<any[]> {
    return this.http.get<any>(API_USERS_URL + 'wallet/');
  }

  save(wallet: Wallets) {
    this.http.post<any>(API_USERS_URL + 'wallet', {amount: wallet.amount}).subscribe(
      res => {
      }
    );
  }

  profileUpdate(user:User): Observable<any>{
    let fd = new FormData();
    fd.append('name', user.name);
    fd.append('age', user.age.toString());
    fd.append('sexe', user.sexe);
    fd.append('telephone', user.telephone);
    if(user.avatar!=null){
      fd.append('avatar', user.avatar, user.avatar.name);
    }
    return this.http.post<any>(API_USERS_URL + 'auth/users/profile/update', fd);
  }

}
