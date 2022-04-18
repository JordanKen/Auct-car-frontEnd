import {Vehicules} from "./vehicule";
import {Time} from "@angular/common";


export class Vente {
  id: number;
  name: string;
  date: Date;
  startHour: Time;
  endHour: Time;
  vehiculeId: number;
  initPrice: number;
  finalPrice: number;
  vehicule: Vehicules;


  clear() {
    this.id = undefined;
    this.name = undefined;
    this.date = undefined;
    this.startHour = undefined;
    this.endHour = undefined;
    this.vehiculeId = undefined;
    this.initPrice = 0;
    this.finalPrice = 0;
    this.vehicule = undefined;
  }
}
