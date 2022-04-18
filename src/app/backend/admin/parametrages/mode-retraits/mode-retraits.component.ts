import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Withdrawal_methods } from '../../../../models/withdrawal_methods';
import { tableData } from './data';
import {RetraitMethodService} from './mode_retrait.service';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {ModeRetraitSortableDirective, SortEvent} from './mode_retrait-sortable.directive';

@Component({
  selector: 'app-mode-depots',
  templateUrl: './mode-retraits.component.html',
  styleUrls: ['./mode-retraits.component.scss'],
  providers: [RetraitMethodService, DecimalPipe]
})
export class ModeRetraitsComponent implements OnInit {
  breadCrumbItems: any;


  tableData: Withdrawal_methods[];
  tables$: Observable<Withdrawal_methods[]>;
  total$: Observable<number>;


  @ViewChildren(ModeRetraitSortableDirective) headers: QueryList<ModeRetraitSortableDirective>;

  constructor(public service: RetraitMethodService) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.breadCrumbItems = [{ label: 'Shreyu', path: '/' }, { label: 'Paramètrages', path: '/' }, { label: 'Modes de retraits', active: true }];
    this._fetchData();
  }
  _fetchData() {
    this.tableData = tableData;
  }
  onSort({ column, direction }: SortEvent) {
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
