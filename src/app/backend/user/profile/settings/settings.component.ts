import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Vehicules} from '../../../../models/vehicule';
import {environment} from '../../../../../environments/environment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WalletService} from './wallet.service';
import {User} from '../../../../models/users';
import {Wallets} from '../../../../models/wallets';
import {AuthService} from '../../../../core/auth';
import {VehiculeService} from '../../../admin/parametrages/devises/vehicule.service';
import {Router} from '@angular/router';
import {NgxPayunitComponent} from 'ngx-payunit';
import {UUID} from 'uuid-generator-ts';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  uuid = new UUID();
  userForm: FormGroup;
  walletForm: FormGroup;
  products: Vehicules[];
  closeResult = '';
  image: File;
  api = environment.apiLocal;
  updateUser: User;
  currentUser: User;
  myWallet: Wallets;
  currentWallet: Wallets;
  public imagePath;
  public imgURL: any;
  public amount: any;
  private payunit: NgxPayunitComponent;

  constructor(private fb: FormBuilder, private vehiculeService: VehiculeService, private rest: WalletService, private userService: AuthService, private modalService: NgbModal, private router: Router) {

    this.payunit = new NgxPayunitComponent();
    this.walletForm = this.fb.group({
      user_id: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });

    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      sexe: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });

  }

  private initConfig(): void {
    let config = {
      apiUsername: environment.apiUser,
      apiPassword: environment.apiPassword,
      x_api_key: environment.apiKey,
      mode: 'test',
    };
    let data = {
      return_url: 'localhost:4200/settings',
      notify_url: 'localhost:4200/profile',
      description: 'load amount',
      purchaseRef: 'fill account',
      total_amount: this.walletForm.get('amount').value,
      currency: 'XAF',
      transaction_id: this.uuid.getDashFreeUUID()
    };
    this.payunit.config(config);
    this.payunit.payload(data);
  }

  makePayment() {
    this.payunit.pay();
  }

  fillUserData() {
    this.userForm.patchValue({
      name: this.currentUser.name,
    });
    this.userForm.patchValue({
      surname: this.currentUser.surname,
    });
    this.userForm.patchValue({
      email: this.currentUser.email,
    });
    this.userForm.patchValue({
      age: this.currentUser.age,
    });
    this.userForm.patchValue({
      telephone: this.currentUser.telephone
    });
    this.imgURL = this.api + this.currentUser.avatar;
  }

  fillWalletData() {
    if (this.currentWallet != null) {
      this.amount = this.currentWallet.amount;
    } else {
      this.amount = 0;
    }
  }

  ngOnInit() {


    this.userService.getUserByToken().subscribe(
      data => {
        this.currentUser = data['response'].user;
      },
      (err) => console.error(1),
      // The 3rd callback handles the "complete" event.
      () => {
        this.fillUserData();
        this.loadWallet();
      }
    );

    this.vehiculeService.getAll().subscribe(
      data => {
        (this.products = data['response']);
      }
    );
  }

  loadWallet() {
    this.rest.getWallet().subscribe(
      data => {
        (this.currentWallet = data['response']);
      },
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => {
        this.fillWalletData();
      }
    );
  }

  fillWallet() {
    this.prepareWallet();
    this.rest.save(this.myWallet);
    this.modalService.dismissAll();
  }

  updateUserFunc() {
    this.prepareUser();
    this.rest.profileUpdate(this.updateUser).subscribe(
      res => {
        console.log(res);
      }
    );
    this.router.navigateByUrl('/profile');
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });

  }

  getErrorMessage(form: FormGroup) {
    return form.get('email').hasError('required')
      ? 'You must enter a value'
      : form.get('email').hasError('email')
        ? 'Not a valid email'
        : '';
  }


  prepareUser() {
    this.updateUser = new User();
    this.updateUser.name = this.userForm.get('name').value;
    this.updateUser.age = this.userForm.get('age').value;
    this.updateUser.sexe = this.userForm.get('sexe').value;
    this.updateUser.telephone = this.userForm.get('telephone').value;
    this.updateUser.avatar = this.image;
    console.log(this.updateUser);
  }

  prepareWallet() {
    this.myWallet = new Wallets();
    this.myWallet.amount = this.walletForm.get('amount').value;
    console.log(this.myWallet);
  }

  handleFileInput(files: FileList) {
    this.image = files.item(0);
    var mimeType = files[0].type;


    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

}
