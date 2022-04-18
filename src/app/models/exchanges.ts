export class Exchanges{
  id: number;
  user_id: number;
  first_currency_id: number;
  second_currency_id: number;
  gross: number;
  fee: number;
  net: number;
  created_at: string;
  updated_at: string;

  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.first_currency_id = undefined;
    this.second_currency_id = undefined;
    this.gross = undefined;
    this.fee = undefined;
    this.net = undefined;
    this.created_at = '';
    this.updated_at = '';
  }
}
