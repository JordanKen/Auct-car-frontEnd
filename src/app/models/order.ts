import {User} from "./users";
import {Vehicules} from "./vehicule";

export class Order{
  id: number;
  userId: number;
  titre: string;
  description: string;
  note: number;
  vehiculeId: number;
  user: User;
  vehicule: Vehicules;


  clear(){
    this.id = undefined;
    this.userId = undefined;
    this.titre = undefined;
    this.description = undefined;
    this.note = undefined;
    this.vehiculeId = undefined;
    this.vehicule = undefined;
    this.user = undefined;
  }
}
