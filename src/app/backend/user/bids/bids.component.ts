
import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../data.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {EnchereService} from "../../admin/parametrages/enchere/enchere.service";
import {Vente} from "../../../models/enchere.model";
import {environment} from "../../../../environments/environment";


//componnet files specifications
@Component({
  selector: 'app-address',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.scss']
})


//exporting the addtess component
export class BidsComponent implements OnInit {
  encheres: Vente[];
  api = environment.apiLocal;

  constructor(private router: Router, private data: DataService, private service: EnchereService) {
  }


  ngOnInit() {

    this.service.getAll().subscribe(
      data => {
        this.encheres = data['response'];
      }
    )

  }


}
