import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MarqueService} from '../../admin/operations/marques/marque.service';
import {GabaritService} from '../../admin/operations/gabaries/gabarit.service';
import {Marque} from '../../../models/marques';
import {Gabarit} from '../../../models/gabaries';


@Component({
  selector: 'app-address',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.scss']
})

export class FindCarComponent implements OnInit {
  searchTerm = '';
  isCollapsed = true;
  marques: Marque[];
  gabaries: Gabarit[];

  constructor(private router: Router, private brandService: MarqueService, private gabaritService: GabaritService) {

  }


  ngOnInit(): void {
    this.brandService.getAll().subscribe(
      data => {
        this.marques = data;
      }
    );
    this.gabaritService.getAll().subscribe(
      data => {
        this.gabaries = data;
      }
    );
  }
}
