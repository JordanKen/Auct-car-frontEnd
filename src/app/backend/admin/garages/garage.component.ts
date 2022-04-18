import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Merchants} from '../../../models/merchants';
import {tableData} from './data';
import {GarageService} from './garage.service';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {MerchantSortableDirective, SortEvent} from './merchant-sortable.directive';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Garage} from "../../../models/garage";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-merchants',
  templateUrl: './garage.component.html',
  styleUrls: ['./merchant.component.scss'],
  providers: [GarageService, DecimalPipe]
})
export class GarageComponent implements OnInit {
  breadCrumbItems: any;
  closeResult = '';
  newGarage : Garage;
  garageForm: FormGroup;
  tableData: Garage[];
  tables$: Observable<Garage[]>;
  total$: Observable<number>;
  image: File;
  api = environment.apiLocal;

  @ViewChildren(MerchantSortableDirective) headers: QueryList<MerchantSortableDirective>;

  constructor(public service: GarageService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.garageForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      openHour: [''],
      lockHour: [''],
      avatar: [''],
      description: ['']
    });

  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Shreyu', path: '/'}, {label: 'Paramètrages', path: '/'}, {
      label: 'Marchands',
      active: true
    }];

    this._fetchData();
    console.log(this.tables$);
  }

  _fetchData() {
    this.service.getAll().subscribe(
      res => {
        this.tableData = res;
      }
    );
  }

  handleFileInput(files: FileList) {
    this.image = files.item(0);
  }

  get f() {
    return this.garageForm.controls;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

  prepare() {
    this.newGarage = new Garage();
    this.newGarage.name = this.garageForm.get('name').value;
    this.newGarage.avatar = this.image;
    this.newGarage.openHour = this.garageForm.get('openHour').value;
    this.newGarage.lockHour = this.garageForm.get('lockHour').value;
    this.newGarage.description = this.garageForm.get('description').value;
  }

  save() {
    this.prepare();
    this.service.save(this.newGarage);
    this.modalService.dismissAll();
  }

}
