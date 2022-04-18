import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Transactionable} from '../../../../../models/transactionable';
import {tableData} from './data';
import { TransactionReceptionService} from './transaction-reception.service';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {TransactionReceptionSortableDirective, SortEvent} from './transaction-reception-sortable.directive';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../core/reducers';
import {getAllTransaction} from '../../../../../core/admin/_selectors/transaction.selectors';

@Component({
  selector: 'app-receptions',
  templateUrl: './transaction-reception.component.html',
  styleUrls: ['./transaction-reception.component.scss'],
  providers: [TransactionReceptionService, DecimalPipe]
})
export class TransactionReceptionComponent implements OnInit {
  breadCrumbItems: any;


  tableData: Transactionable[];
  tables$: Observable<Transactionable[]>;
  total$: Observable<number>;


  @ViewChildren(TransactionReceptionSortableDirective) headers: QueryList<TransactionReceptionSortableDirective>;

  constructor(public service: TransactionReceptionService,
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
