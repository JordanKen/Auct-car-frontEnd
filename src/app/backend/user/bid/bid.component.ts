//Address component.ts - Type Script file that contains code to render adddress feature to elearning application


//including the required files and services
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {interval, Subscription} from 'rxjs';
import {EnchereService} from '../../admin/parametrages/enchere/enchere.service';
import {Vente} from '../../../models/enchere.model';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../core/auth';
import {User} from '../../../models/users';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Proposition} from '../../../models/proposition';
import {VehiculeService} from '../../admin/parametrages/devises/vehicule.service';
import {Vehicules} from '../../../models/vehicule';


//componnet files specifications
@Component({
  selector: 'app-address',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})


//exporting the addtess component
export class BidComponent implements OnInit, OnDestroy {
  private subscriptionTime: Subscription;
  private subscriptionBid: Subscription;
  private saleSubscription: Subscription;
  enchere: Vente;
  public dateNow = new Date();
  public dDay: Date;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;
  currentBid: number;
  vehicule: Vehicules;
  isComing = false;
  isNow = false;
  isPassed = false;
  index = 0;
  api = environment.apiLocal;

  listBids = [];
  propositions: Proposition[];


  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;
  currentUser: User;
  private propositionForm: FormGroup;
  private proposition: Proposition;

  constructor(private fb: FormBuilder, private router: Router, private service: EnchereService, private vservice: VehiculeService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.propositionForm = this.fb.group({
      amount: ['', [Validators.required]]
    });

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.index = res['id'];
      this.service.getOne(res['id']).subscribe(
        data => {
          this.enchere = data['response'];
          this.vservice.getOneProduct(this.enchere.vehicule.id).subscribe(
            item => {
              this.vehicule = item['response'];
            });
        },
        (err) => console.error(err),
        // The 3rd callback handles the "complete" event.
        () => {
          this.dDay = new Date(this.enchere.date + ' ' + this.enchere.startHour);
          let MaxdDay = new Date(this.enchere.date + ' ' + this.enchere.endHour);
          this.currentBid = this.enchere.initPrice;
          if (this.dDay > this.dateNow) {
            this.isComing = true;
            this.isPassed = false;
          }
          if (this.dDay.getDay() == this.dateNow.getDay() && this.dDay.getHours() <= this.dateNow.getHours() && MaxdDay.getHours() > this.dateNow.getHours()) {
            this.isNow = true;
          }
          if (!this.isComing && !this.isNow) {
            this.isPassed = true;
          }
        }
      );
    });
    this.authService.getUserByToken().subscribe(
      data => {
        this.currentUser = data['response'].user;
      }
    );
    this.subscriptionTime = interval(1000)
      .subscribe(x => {
        this.getTimeDifference();
      });

    this.subscriptionBid = interval(3000)
      .subscribe(x => {
        this.updateView();
      });
  }

  fetchMore(): void {
    const newItems = [];
    for (let i = 0; i < this.propositions.length; i++) {
      newItems.push({
        title: this.propositions[i].user.name,
        content: 'depuis 5 minutes',
        image: this.propositions[i].amount + ' XAF'
      });
    }
  }

  ngOnDestroy() {
    this.subscriptionTime.unsubscribe();
    this.subscriptionBid.unsubscribe();
  }

  updateView() {
    this.service.getPropositionOfBid(this.index).subscribe(
      res => {
        this.propositions = res['response'];
        this.fetchMore();
      }
    );
    this.service.getOne(this.index).subscribe(
      data => {
        this.enchere = data['response'];
        this.vservice.getOneProduct(this.enchere.vehicule.id).subscribe(
          item => {
            this.vehicule = item['response'];
          });
      });
  }


  private getTimeDifference() {
    if (this.isComing) {
      this.timeDifference = this.dDay.getTime() - new Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
    }
    if (this.isNow) {
      this.dDay = new Date(this.enchere.date + ' ' + this.enchere.endHour);
      this.timeDifference = this.dDay.getTime() - new Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
    } else {
      this.dDay = new Date(this.enchere.date + ' ' + this.enchere.endHour);
      this.timeDifference = this.dDay.getTime() - new Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
    }

  }

  prepareProposition() {
    if(this.propositionForm.get('amount').value >= 10000){
      this.proposition = new Proposition();
      this.proposition.amount = this.enchere.finalPrice + this.propositionForm.get('amount').value;
      this.proposition.userId = this.currentUser.id;
      this.proposition.saleId = this.enchere.id;
    }
  }

  addProposition() {
    this.proposition = new Proposition();
    this.proposition.amount = this.enchere.finalPrice + 10000;
    console.log(this.proposition.amount)
    this.proposition.userId = this.currentUser.id;
    this.proposition.saleId = this.enchere.id;
    this.service.saveProposition(this.proposition).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  saveProposition() {
    this.prepareProposition();
    if(this.proposition != null){
      this.service.saveProposition(this.proposition).subscribe(
        data => {
          console.log(data);
        }
      );
    }
  }

  private allocateTimeUnits(timeDifference) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

}
