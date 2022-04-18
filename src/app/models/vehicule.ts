import {User} from "./users";
import {Marque} from "./marques";
import {Gabarit} from "./gabaries";
import {Garage} from "./garage";
import {Rapport} from "./rapport.model";


export class Vehicules{
  id: number;
  name: string;
  manufacturateYear: number;
  mileage: number;
  price: number;
  color: string;
  marqueId: number;
  gabaritId: number;
  garageId: number;
  isSale: boolean;
  userId: number;
  avatar: File;
  user: User;
  marque: Marque;
  gabarit: Gabarit;
  garage: Garage;
  rapport: Rapport;


  clear(){
    this.id = undefined;
    this.name = undefined;
    this.manufacturateYear = undefined;
    this.mileage = undefined;
    this.price = undefined;
    this.color = '';
    this.isSale = undefined;
    this.userId = undefined;
    this.garageId = undefined;
    this.avatar = undefined;
    this.user = undefined;
    this.marque = undefined;
    this.gabarit = undefined;
    this.garage = undefined;
    this.rapport = undefined;

  }
}
