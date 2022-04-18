import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MyProductsComponent} from "./my-products/my-products.component";
import {MyordersComponent} from "./myorders/myorders.component";
import {PostProductComponent} from "./post-product/post-product.component";
import {AddressComponent} from "./address/address.component";
import {SettingsComponent} from "./settings/settings.component";
import {OrderdetailsComponent} from "./orderdetails/orderdetails.component";
import {ProductComponent} from "./product/product.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CategoryComponent} from "./category/category.component";
import {CartComponent} from "./cart/cart.component";
import {SearchComponent} from "./search/search.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {GarageComponent} from "../admin/garages/garage.component";
import {GaragesListComponent} from "./garages/garages.component";
import {FindCarComponent} from "./find-car/find-car.component";
import {BidComponent} from "./bid/bid.component";
import {BidsComponent} from "./bids/bids.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'bid/:id',
    component: BidComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'encheres',
    component: BidsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'find-car',
    component: FindCarComponent,
  },
  {
    path: 'garages',
    component: GaragesListComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:id',
    component: CategoryComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'orders/:id',
    component: OrderdetailsComponent,
  },
  {
    path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,

  },
  {
    path: 'profile/address',
    component: AddressComponent,

  },
  {
    path: 'profile/postproduct',
    component: PostProductComponent,

  },
  {
    path: 'profile/myproducts',
    component: MyProductsComponent,

  },
  {
    path: 'profile/orders',
    component: MyordersComponent,

  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
