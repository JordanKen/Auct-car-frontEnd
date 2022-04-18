import {User} from "./users";

export class Wallets{
  id: number;
  user_id: number;
  amount: number;
  user: User;
  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.amount = undefined;
    this.user = undefined;
  }
}
