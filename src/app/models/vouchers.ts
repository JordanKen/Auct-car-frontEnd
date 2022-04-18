export class Vouchers{
  id: number;
  user_id: number;
  voucher_amount	: number;
  voucher_code: string;
  json_data: string;
  created_at: string;
  updated_at: string;
  currency_id: number;
  currency_symbol: string;
  user_loader: number;
  is_loaded: number;
  voucher_fee: number;
  wallet_id: number;
  voucher_value: number;
  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.voucher_amount = undefined;
    this.voucher_code = '';
    this.json_data = '';
    this.created_at = '';
    this.updated_at = '';
    this.currency_id = undefined;
    this.currency_symbol = '';
    this.user_loader = undefined;
    this.is_loaded = undefined;
    this.voucher_fee = undefined;
    this.wallet_id = undefined;
    this.voucher_value = undefined;

  }
}
