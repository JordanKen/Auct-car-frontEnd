export class Currency_deposit_methods{
  id: number;
  currency_id: number;
  deposit_method_id: number;
  created_at: string;
  updated_at: string;

  clear(){
    this.id = undefined;
    this.currency_id = undefined;
    this.deposit_method_id = undefined;
    this.created_at = '';
    this.updated_at = '';

  }
}
