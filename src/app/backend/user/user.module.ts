import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {FlatpickrModule} from 'angularx-flatpickr';
import {UIModule} from '../../shared/ui/ui.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WidgetModule} from '../../shared/widgets/widget.module';
import {TranslateModule} from '@ngx-translate/core';
import {UserRoutingModule} from './user-routing.module';
import {AppComponent} from "../../app.component";
import {RegistrationComponent} from "./registration/registration.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SettingsComponent} from "./settings/settings.component";
import {AddressComponent} from "./address/address.component";
import {MessageComponent} from "./message/message.component";
import {CategoriesComponent} from "./categories/categories.component";
import {PostProductComponent} from "./post-product/post-product.component";
import {MyProductsComponent} from "./my-products/my-products.component";
import {CategoryComponent} from "./category/category.component";
import {ProductComponent} from "./product/product.component";
import {SearchComponent} from "./search/search.component";
import {CartComponent} from "./cart/cart.component";
import {MyordersComponent} from "./myorders/myorders.component";
import {OrderdetailsComponent} from "./orderdetails/orderdetails.component";
import {BodyComponent} from "./body/body.component";
import {ContactComponent} from "./contact/contact.component";
import {GarageComponent} from "../admin/garages/garage.component";
import {GaragesListComponent} from "./garages/garages.component";
import {ProfileModule} from "./profile/profile.module";
import {FindCarComponent} from "./find-car/find-car.component";
import {BidComponent} from "./bid/bid.component";
import {BidsComponent} from "./bids/bids.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    BidComponent,
    BidsComponent,
    FindCarComponent,
    GaragesListComponent,
    ContactComponent,
    HomeComponent,
    MessageComponent,
    RegistrationComponent,
    LoginComponent,
    SettingsComponent,
    AddressComponent,
    CategoriesComponent,
    PostProductComponent,
    MyProductsComponent,
    CategoryComponent,
    ProductComponent,
    SearchComponent,
    CartComponent,
    MyordersComponent,
    OrderdetailsComponent,],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    WidgetModule,
    UserRoutingModule,
    TranslateModule,
    NgbModule,
    ProfileModule,
    MatListModule,
    MatListModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class UserModule {
}
