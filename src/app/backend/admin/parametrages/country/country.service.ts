import { Injectable, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {SortDirection} from "./country-sortable.directive";
import {environment} from "../../../../../environments/environment";
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
function sort(tables: User[], column: string, direction: string): User[] {
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
function matches(tables: User, term: string, pipe: PipeTransform) {
  return tables.id.toString().toLowerCase().includes(term)
    || tables.name.toString().toLowerCase().includes(term)
    || tables.name.toString().toLowerCase().includes(term)
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // tslint:disable-next-line: variable-name
  private _loading$ = new BehaviorSubject<boolean>(true);
  // tslint:disable-next-line: variable-name
  private _search$ = new Subject<void>();
  // tslint:disable-next-line: variable-name
  public _tables$ : User[];
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

  getAll(): Observable<any[]> {
    return  this.http.get<any>(API_USERS_URL + 'auth/users');
  }
  save(user: User) {
    this.http.post<any>(API_USERS_URL + 'auth/users/save', {
      name: user.name, surname: user.surname, age: user.age, email: user.email,telephone: user.telephone, sexe: user.sexe, password: user.password, avatar: user.avatar, isAdmin: user.isAdmin
    }).subscribe(
      res => {
        this._tables$ = res.response;
      }
    );
  }

}
