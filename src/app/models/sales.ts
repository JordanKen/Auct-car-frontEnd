export class Sales{
  id: number;
  user_id: number;
  merchant_id: number;
  transaction_state_id: number;
  purchase_id: number;
  gross: number;
  fee: number;
  net: number;
  json_data: string;
  created_at: string;
  updated_at: string;
  currency_id: string;
  currency_symbol: number;
  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.merchant_id = undefined
    this.transaction_state_id = undefined;
    this.purchase_id = undefined;
    this.gross = undefined;
    this.fee = undefined;
    this.net = undefined;
    this.json_data = '';
    this.created_at = '';
    this.updated_at = '';
    this.currency_id = '';
    this.currency_symbol = undefined;
  }
}
