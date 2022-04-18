export class Currency_withdrawal_methods{
  id: number;
  currency_id: number;
  withdrawal_method_id: number;
  created_at: string;
  updated_at: string;

  clear(){
    this.id = undefined;
    this.currency_id = undefined;
    this.withdrawal_method_id = undefined;
    this.created_at = '';
    this.updated_at = '';

  }
}
