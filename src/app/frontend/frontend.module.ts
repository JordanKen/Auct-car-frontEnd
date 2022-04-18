import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {FlatpickrModule} from 'angularx-flatpickr';

import {UIModule} from '../shared/ui/ui.module';
import {FrontendRoutingModule} from './frontend-routing.module';
import {WidgetModule} from '../shared/widgets/widget.module';
import {TranslateModule} from '@ngx-translate/core';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    WidgetModule,
    FrontendRoutingModule,
    TranslateModule,
  ]
})
export class FrontendModule {
}
