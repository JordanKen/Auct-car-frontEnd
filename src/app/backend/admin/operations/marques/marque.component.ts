import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Marque} from "../../../../models/marques";
import {MarqueService} from "./marque.service";
import {MerchantSortableDirective} from "../../garages/merchant-sortable.directive";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-merchants',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss'],
  providers: [MarqueService, DecimalPipe]
})
export class MarqueComponent implements OnInit {
  breadCrumbItems: any;
  closeResult = '';
  newMarque : Marque;
  marqueForm: FormGroup;
  tableData: Marque[];
  tables$: Observable<Marque[]>;
  total$: Observable<number>;
  image: File;
  api = environment.apiLocal;


  @ViewChildren(MerchantSortableDirective) headers: QueryList<MerchantSortableDirective>;

  constructor(public service: MarqueService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.marqueForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });

  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Shreyu', path: '/'}, {label: 'Paramètrages', path: '/'}, {
      label: 'Marchands',
      active: true
    }];

    this._fetchData();
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
    return this.marqueForm.controls;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

  prepare() {
    this.newMarque = new Marque();
    this.newMarque.name = this.marqueForm.get('name').value;
    this.newMarque.avatar = this.image;
  }

  save() {
    this.prepare();
    this.service.save(this.newMarque);
    this.modalService.dismissAll();
  }

}
