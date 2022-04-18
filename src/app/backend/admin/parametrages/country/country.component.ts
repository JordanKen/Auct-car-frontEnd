import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "./country.service";
import {User} from "../../../../models/users";
import {MerchantSortableDirective} from "../../garages/merchant-sortable.directive";
import {Component, OnInit, QueryList, ViewChildren} from "@angular/core";


@Component({
  selector: 'app-merchants',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [UserService, DecimalPipe]
})
export class UserComponent implements OnInit {
  breadCrumbItems: any;
  closeResult = '';
  newUser : User;
  userForm: FormGroup;
  tableData: User[];
  tables$: Observable<User[]>;
  total$: Observable<number>;


  @ViewChildren(MerchantSortableDirective) headers: QueryList<MerchantSortableDirective>;

  constructor(public service: UserService, private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['',[Validators.required]],
      age: [''],
      email: ['',[Validators.required]],
      telephone: ['',[Validators.required]],
      password: ['', [Validators.required]],
      sexe: [''],
      avatar: [''],
      isAdmin: ['',[Validators.required]]
    });

  }

  ngOnInit() {
    this.breadCrumbItems = [{label: 'Shreyu', path: '/'}, {label: 'Paramètrages', path: '/'}, {
      label: 'Marchands',
      active: true
    }];

    this._fetchData();
  }

  _fetchData() {
    this.service.getAll().subscribe(
      res => {
        this.tableData = res["response"];
      }
    );
  }

  get f() {
    return this.userForm.controls;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

  prepare() {
    this.newUser = new User();
    this.newUser.name = this.userForm.get('name').value;
    this.newUser.surname = this.userForm.get('surname').value;
    this.newUser.age = this.userForm.get('age').value;
    this.newUser.email = this.userForm.get('email').value;
    this.newUser.telephone = this.userForm.get('telephone').value;
    this.newUser.sexe = this.userForm.get('sexe').value;
    this.newUser.avatar = this.userForm.get('avatar').value;
    this.newUser.isAdmin = this.userForm.get('isAdmin').value;
  }

  save() {
    this.prepare();
    this.service.save(this.newUser);
    this.modalService.dismissAll();
  }

}
