export class Escrows{
  id: number;
  user_id: number;
  to: number;
  gross: number;
  description: string;
  json_data: number;
  currency_id: number;
  currency_symbol: string;
  escrow_transaction_status: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  agreement: number;
  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.to = undefined;
    this.gross = undefined;
    this.description = '';
    this.json_data = undefined;
    this.currency_id = undefined;
    this.currency_symbol = '';
    this.escrow_transaction_status = '';
    this.deleted_at = '';
    this.created_at = '';
    this.updated_at = '';
    this.agreement = undefined;
  }
}
