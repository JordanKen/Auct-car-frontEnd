//Categories component.ts - Type Script file that contains code to render Categories feature to elearning application

//including the required files and services
import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../data.service";
import {RestApiService} from "../../../rest-api.service";
import {CategorieService} from "./categorie.service";
import {Marque} from "../../../models/marques";

//Component specifications
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

//exporting the categories component
export class CategoriesComponent implements OnInit {
  categories: Marque[];

  newCategory = '';
  btnDisabled = false;

  constructor(
    private data: DataService,
    private rest: RestApiService,
    private service: CategorieService
  ) { }

  async ngOnInit() {
    try {
      const data = await this.service.getAllMarque().subscribe(
        marque => {
          marque
            ? (this.categories = marque)
            : this.data.error(data['message']);
        }
      );

    } catch (error) {
      this.data.error(error['message']);
    }
  }


}
