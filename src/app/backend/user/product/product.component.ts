//product component.ts - Type Script file that contains code to render products to elearning application

//including the required files and services
import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from "../../../data.service";
import {RestApiService} from "../../../rest-api.service";
import {VehiculeService} from "../../admin/parametrages/devises/vehicule.service";
import {Vehicules} from "../../../models/vehicule";
import {Review} from "../../../models/review";
import {ProductService} from "./product.service";
import {environment} from "../../../../environments/environment";

//component specific details
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

//exporting Product component for reuse
export class ProductComponent implements OnInit {
  myReview = {
    title: '',
    description: '',
    rating: 0,
  };
  btnDisabled = false;

  vehiccule: Vehicules;
  review: Review;
  api = environment.apiLocal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private vehiculeService: VehiculeService,
    private produitService: ProductService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.vehiculeService
        .getOneProduct(res['id']).subscribe(
          res => {
            this.vehiccule = res['response'];
          }
      )
    });
  }

  addToCart() {
    let mine = JSON.stringify(this.vehiccule);
    console.log(mine);
    this.data.addToCart(mine)
      ? this.data.success('Product successfully added to cart.')
      : this.data.error('Product has already been added to cart.');
  }

  prepare(){
    this.review = new Review();
    this.review.vehiculeId = this.vehiccule.id;
    this.review.titre = this.myReview.title;
    this.review.description = this.myReview.description;
    this.review.note = this.myReview.rating;

  }

  async postReview() {
    this.btnDisabled = true;
    try {
      await this.produitService.savePreview(this.review).subscribe(
        review => {
          if(review){
            this.btnDisabled = false;
          }
        }
      );
    } catch (error) {
      this.data.error(error['message']);
    }
  }
}
