import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MerchantSortableDirective} from "../../garages/merchant-sortable.directive";
import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {VehiculeService} from "../devises/vehicule.service";
import {Vente} from "../../../../models/enchere.model";
import {Vehicules} from "../../../../models/vehicule";
import {EnchereService} from "./enchere.service";


@Component({
  selector: 'app-merchants',
  templateUrl: './enchere.component.html',
  styleUrls: ['./enchere.component.scss'],
  providers: [EnchereService, DecimalPipe]
})
export class EnchereComponent implements OnInit {
  breadCrumbItems: any;
  closeResult = '';
  newVente: Vente;
  venteForm: FormGroup;
  tableData: Vente[];
  vehicules: Vehicules[];
  tables$: Observable<Vente[]>;
  total$: Observable<number>;
  selectVehicule: number;
  api = environment.apiLocal;


  @ViewChildren(MerchantSortableDirective) headers: QueryList<MerchantSortableDirective>;

  constructor(public service: EnchereService, public vservice: VehiculeService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.venteForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      vehiculeId: ['', [Validators.required]],
      date: ['',[Validators.required]],
      startHour: ['',[Validators.required]],
      endHour: ['',[Validators.required]],
      initPrice: ['']
    });

  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Shreyu', path: '/'}, {label: 'Paramètrages', path: '/'}, {
      label: 'Marchands',
      active: true
    }];
    this._fetchData();
    this._fetchVData();
  }

  async _fetchVData() {
    await this.vservice.getAll().subscribe(
      res => {
        this.vehicules = res['response'];
      }
    );
  }

  async _fetchData() {
    await this.service.getAll().subscribe(
      res => {
        this.tableData = res['response'];
      }
    );
  }


  get f() {
    return this.venteForm.controls;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

  prepare() {
    this.newVente = new Vente();
    this.newVente.name = this.venteForm.get('name').value;
    this.newVente.vehiculeId = this.venteForm.get('vehiculeId').value;
    this.newVente.date = this.venteForm.get('date').value;
    this.newVente.startHour = this.venteForm.get('startHour').value;
    this.newVente.endHour = this.venteForm.get('endHour').value;
    this.newVente.initPrice = this.venteForm.get('initPrice').value;
    console.log(this.newVente);
  }


  save() {
    this.prepare();
    this.service.save(this.newVente);
    this.modalService.dismissAll();
  }

}
