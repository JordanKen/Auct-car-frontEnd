export class Sends{
  id: number;
  receive_id: number;
  user_id: number;
  to_id: string;
  transaction_state_id: number;
  gross: number;
  fee: number;
  net: number;
  description: string;
  json_data: string;
  created_at: string;
  updated_at: string;
  currency_id: number;
  currency_symbol: string;
  clear(){
    this.id = undefined;
    this.receive_id = undefined;
    this.user_id = undefined;
    this.to_id = undefined;
    this.transaction_state_id = undefined;
    this.gross = undefined;
    this.fee = undefined;
    this.net = undefined;
    this.description = '';
    this.json_data = '';
    this.created_at = '';
    this.updated_at = '';
    this.currency_id = undefined;
    this.currency_symbol = '';
  }
}
