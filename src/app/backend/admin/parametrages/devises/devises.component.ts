import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MerchantSortableDirective} from "../../garages/merchant-sortable.directive";
import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";
import {Vehicules} from "../../../../models/vehicule";
import {VehiculeService} from "./vehicule.service";
import {UserService} from "../country/country.service";
import {GarageService} from "../../garages/garage.service";
import {Garage} from "../../../../models/garage";
import {User} from "../../../../models/users";
import {MarqueService} from "../../operations/marques/marque.service";
import {GabaritService} from "../../operations/gabaries/gabarit.service";
import {Gabarit} from "../../../../models/gabaries";
import {Marque} from "../../../../models/marques";
import {environment} from "../../../../../environments/environment";


@Component({
  selector: 'app-merchants',
  templateUrl: './devises.component.html',
  styleUrls: ['./devises.component.scss'],
  providers: [VehiculeService, DecimalPipe]
})
export class VehiculeComponent implements OnInit {
  breadCrumbItems: any;
  closeResult = '';
  newVehicule : Vehicules;
  userForm: FormGroup;
  tableData: Vehicules[];
  garages: Garage[];
  users: User[];
  gabaries: Gabarit[];
  marques: Marque[];
  tables$: Observable<Vehicules[]>;
  total$: Observable<number>;
  selectUser: number;
  selectGarage: number;
  selectMarque: number;
  selectGabarit: number;
  image: File;
  api = environment.apiLocal;


  @ViewChildren(MerchantSortableDirective) headers: QueryList<MerchantSortableDirective>;

  constructor(public vservice: VehiculeService, public uservice: UserService,public gservice: GarageService, public mservice: MarqueService, public gaService: GabaritService, private modalService: NgbModal, private formBuilder: FormBuilder)  {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      marque: ['',[Validators.required]],
      manufacturateYear: [''],
      mileage: ['',[Validators.required]],
      price: ['',[Validators.required]],
      color: ['', [Validators.required]],
      gabarit: [''],
      garage: [''],
      userId: ['', [Validators.required]],
      avatar: ['',[Validators.required]]
    });

  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Shreyu', path: '/'}, {label: 'Paramètrages', path: '/'}, {
      label: 'Marchands',
      active: true
    }];

    this._fetchVData();
    this._fetchUData();
    this._fetchGData();
    this._fetchMData();
    this._fetchGaData();
  }

  async _fetchVData() {
    await this.vservice.getAll().subscribe(
      res => {
        this.tableData = res['response'];
      }
    );
  }

  async _fetchGData() {
    await this.gservice.getAll().subscribe(
      res => {
        this.garages = res;
      }
    );
  }

  async _fetchGaData() {
    await this.gaService.getAll().subscribe(
      res => {
        this.gabaries = res;

      }
    );
  }

  async _fetchMData() {
    await this.mservice.getAll().subscribe(
      res => {
        this.marques = res;
      }
    );
  }

  async _fetchUData() {
    await this.uservice.getAll().subscribe(
      res => {
        this.users = res["response"];
      }
    );
  }

  get f() {
    return this.userForm.controls;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

  prepare() {
    this.newVehicule = new Vehicules();
    this.newVehicule.name = this.userForm.get('name').value;
    this.newVehicule.manufacturateYear = this.userForm.get('manufacturateYear').value;
    this.newVehicule.mileage = this.userForm.get('mileage').value;
    this.newVehicule.price  = this.userForm.get('price').value;
    this.newVehicule.color = this.userForm.get('color').value;
    this.newVehicule.userId = this.userForm.get('userId').value;
    this.newVehicule.avatar = this.image;
    this.newVehicule.marqueId = this.userForm.get('marque').value;
    this.newVehicule.garageId = this.userForm.get('garage').value;
    this.newVehicule.gabaritId = this.userForm.get('gabarit').value;
  }

  handleFileInput(files: FileList) {
    this.image = files.item(0);
  }


  save() {
    this.prepare();
    this.vservice.save(this.newVehicule);
    this.modalService.dismissAll();
  }

}
