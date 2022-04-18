//Cart component.ts - Type Script file that contains code to render cart feature to elearning application

//including the required files and services
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {DataService} from "../../../data.service";
import {RestApiService} from "../../../rest-api.service";
import {environment} from "../../../../environments/environment";
import {Vehicules} from "../../../models/vehicule";
import {VehiculeService} from "../../admin/parametrages/devises/vehicule.service";
import {WalletService} from "../profile/settings/wallet.service";
import {Wallets} from "../../../models/wallets";

//componnet files specifications
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})

//exporting the cart component
export class CartComponent implements OnInit {
  btnDisabled = false;
  handler: any;
  api = environment.apiLocal;
  vehicules : [];
  cart: [];
  currentWallet: Wallets;

  quantities = [];

  constructor(
    private data: DataService,
    private rest: RestApiService,
    private router: Router,
    public service: VehiculeService,
    private walletService: WalletService
  ) {}

  trackByCartItems(index: number, item: any) {
    return item.id;
  }

  loadItem(){
    this.vehicules = [];
    for(let item of this.data.getCart()){
      // @ts-ignore
      this.vehicules.push(JSON.parse(item));
    }
  }

  loadWallet(){
    this.walletService.getWallet().subscribe(
      data => {
        (this.currentWallet = data['response']);
      },
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => {
      }
    );
  }
  get cartTotal() {
    let total = 0;
    this.vehicules.forEach((data, index) => {
      total += data['price'];
    });
    return total;
  }

  removeProduct(index, product) {
    this.vehicules.splice(index, 1);
    this.data.removeFromCart(JSON.stringify(product));
  }

  ngOnInit() {
    this.loadItem()
    this.loadWallet()

    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: '../../../../assets/img/logo.png',
      locale: 'auto',
      token: async stripeToken => {
        let products;
        products = [];
        this.vehicules.forEach((d, index) => {
          products.push({
            product: d['id'],
            quantity: 1,
          });
        });

        try {
          const data = await this.rest.post(
            'http://localhost:3030/api/payment',
            {
              totalPrice: this.cartTotal,
              products,
              stripeToken,
            },
          );
          data['success']
            ? (this.data.clearCart(), this.data.success('Purchase Successful.'))
            : this.data.error(data['message']);
        } catch (error) {
          this.data.error(error['message']);
        }
      },
    });
  }

  validate() {
    if (!this.quantities.every(data => data > 0)) {
      this.data.warning('Quantity cannot be less than one.');
    }
     else if (!this.currentWallet || this.currentWallet.amount < this.cartTotal) {
      this.router.navigate(['/profile']).then(() => {
        this.data.warning('You dont have have enough money in your account. Please fill your wallet');
      });
    } else {
      this.data.message = '';
      return true;
    }
  }

  checkout() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        this.handler.open({
          name: 'Amazono',
          description: 'Checkout Payment',
          amount: this.cartTotal,
          closed: () => {
            this.btnDisabled = false;
          },
        });
      } else {
        this.btnDisabled = false;
      }
    } catch (error) {
      this.data.error(error);
    }
  }
}
