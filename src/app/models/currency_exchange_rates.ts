export class Currency_exchange_rates{
  id: number;
  first_currency_id: number;
  second_currency_id: number;
  exchanges_to_second_currency_value: number;
  created_at: string;
  updated_at: string;

  clear(){
    this.id = undefined;
    this.first_currency_id = undefined;
    this.second_currency_id = undefined;
    this.exchanges_to_second_currency_value = undefined;
    this.created_at = '';
    this.updated_at = '';

  }
}
