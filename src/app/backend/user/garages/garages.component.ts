//garages component.ts - Type Script file that contains code to render garages feature to elearning application

//including the required files and services
import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../data.service";
import {RestApiService} from "../../../rest-api.service";
import {GarageService} from "../../admin/garages/garage.service";
import {Garage} from "../../../models/garage";
import {environment} from "../../../../environments/environment";

//Component specifications
@Component({
  selector: 'app-garages',
  templateUrl: './garages.component.html',
  styleUrls: ['./categories.component.scss']
})

//exporting the garages component
export class GaragesListComponent implements OnInit {
  garages: Garage[];
  api = environment.apiLocal;

  newCategory = '';
  btnDisabled = false;

  constructor(
    private data: DataService,
    private rest: RestApiService,
    private service: GarageService
  ) {
  }

  async ngOnInit() {
    try {
      const data = await this.service.getAll().subscribe(
        marque => {
          marque
            ? (this.garages = marque)
            : this.data.error(data['message']);
        }
      );

    } catch (error) {
      this.data.error(error['message']);
    }
  }


}
