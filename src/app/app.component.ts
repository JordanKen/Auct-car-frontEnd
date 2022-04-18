import {Component} from '@angular/core';
import {ConnectionService} from 'ng-connection-service';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import validate = WebAssembly.validate;
import {DataService} from "./data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isConnected = true;
  noInternetConnection: boolean;
  searchTerm = '';
  isCollapsed = true;

  constructor(private connectionService: ConnectionService, private toastr: ToastrService, private translate: TranslateService, private data: DataService, private router: Router) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.noInternetConnection = false;
      } else {
        this.noInternetConnection = true;
        translate.get('APPCOMPONENT.CONNECTIONERROR').subscribe((res: string) => {
          this.toastr.error(res, 'Statut de connexion', {
            timeOut: 7000,
          });
        });
      }
    });
  }

  get token() {
    return localStorage.getItem('token');
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    /*this.data.user = {};
    this.data.cartItems = 0;
    localStorage.clear();
    this.router.navigate(['usrdb']);*/
  }

  search() {
    if (this.searchTerm) {
      this.collapse();
      this.router.navigate(['usrdb/search', { query: this.searchTerm }]);
    }
  }
}
