import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Transactionable} from '../../../../../models/transactionable';
import {tableData} from './data';
import {TransactionEnvoiService} from './transaction-envoi.service';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {TransactionEnvoiSortableDirective, SortEvent} from './transaction-envoi-sortable.directive';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../core/reducers';
import {getAllTransaction} from '../../../../../core/admin/_selectors/transaction.selectors';

@Component({
  selector: 'app-envois',
  templateUrl: './transaction-envoi.component.html',
  styleUrls: ['./transaction-envoi.component.scss'],
  providers: [TransactionEnvoiService, DecimalPipe]
})
export class TransactionEnvoiComponent implements OnInit {
  breadCrumbItems: any;


  tableData: Transactionable[];
  tables$: Observable<Transactionable[]>;
  total$: Observable<number>;


  @ViewChildren(TransactionEnvoiSortableDirective) headers: QueryList<TransactionEnvoiSortableDirective>;

  constructor(public service: TransactionEnvoiService,
              private store: Store<AppState>) {
    this.tables$ = this.store.select(getAllTransaction);

    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.breadCrumbItems = [{label: 'Shreyu', path: '/'}, {label: 'Paramètrages', path: '/'}, {
      label: 'Pays',
      active: true
    }];
    /**
     * fetch data
     */
    this._fetchData();
    /**
     * fetches the table value
     */
  }

  _fetchData() {
    this.tableData = tableData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
