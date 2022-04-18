import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { ProfileOverviewComponent } from './overview/overview.component';
import { ProfileSettingsComponent } from './settings/settings.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {WidgetModule} from "../../../shared/widgets/widget.module";
import {TranslateModule} from "@ngx-translate/core";
import {NgApexchartsModule} from "ng-apexcharts";
import {NgxPayunitModule} from 'ngx-payunit';

const COMPONENTS = [ProfileLayoutComponent, ProfileOverviewComponent, ProfileSettingsComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
    imports: [ProfileRoutingModule, ReactiveFormsModule, NgbModule, CommonModule, WidgetModule, TranslateModule, NgApexchartsModule, NgxPayunitModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC ,
})
export class ProfileModule {}
