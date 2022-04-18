//Homecomponent.ts - Type Script file that contains code to render home page  to elearning application

//including the required files and services
import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../data.service";
import {RestApiService} from "../../../rest-api.service";
import {VehiculeService} from "../../admin/parametrages/devises/vehicule.service";
import {Vehicules} from "../../../models/vehicule";
import {environment} from "../../../../environments/environment";
//component specific details
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

//Exporting the HomeComponent
export class HomeComponent implements OnInit {
  products: Vehicules[];
  api = environment.apiLocal;

  constructor(private data: DataService, private rest: VehiculeService) {}

  async ngOnInit() {
    try {
      const data = this.rest.getAll().subscribe(
        data => {
          data['status'] === true
            ? (this.products = data['response'])
            : this.data.error('Could not fetch products.');
        }
      );

    } catch (error) {
      this.data.error(error['message']);
    }
  }
}
