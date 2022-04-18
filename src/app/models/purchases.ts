export class Purchases{
  id: number;
  user_id: number;
  merchant_id: number;
  transaction_state_id: number;
  sale_id: number;
  gross: number;
  fee: number;
  net: number;
  json_data: string;
  created_at: string;
  updated_at: string;
  currency_id: number;
  currency_symbol: string;
  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.merchant_id = undefined;
    this.transaction_state_id = undefined;
    this.sale_id = undefined;
    this.gross = undefined;
    this.fee = undefined;
    this.net = undefined;
    this.json_data = '';
    this.created_at = '';
    this.updated_at = '';
    this.currency_id = undefined;
    this.currency_symbol = '';
  }
}
