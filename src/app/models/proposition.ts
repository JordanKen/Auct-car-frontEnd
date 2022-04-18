import {User} from "./users";

export class Proposition{
  id: number;
  amount: number;
  userId: number;
  saleId: number;
  user: User;

  clear(){
    this.id = undefined;
    this.amount = undefined;
    this.userId = undefined;
    this.saleId = undefined;
    this.user = undefined;
  }
}
