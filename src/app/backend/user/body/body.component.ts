//Address component.ts - Type Script file that contains code to render adddress feature to elearning application


//including the required files and services
import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../data.service";
import {RestApiService} from "../../../rest-api.service";
import {Router} from "@angular/router";


//componnet files specifications
@Component({
  selector: 'app-address',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})


//exporting the addtess component
export class BodyComponent {
  searchTerm = '';
  isCollapsed = true;

  constructor(private router: Router, private data: DataService) {
    this.data.cartItems = this.data.getCart().length;
    this.data.getProfile();
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
    this.data.user = {};
    this.data.cartItems = 0;
    localStorage.clear();
    this.router.navigate(['']);
  }

  search() {
    if (this.searchTerm) {
      this.collapse();
      this.router.navigate(['search', { query: this.searchTerm }]);
    }
  }
}
