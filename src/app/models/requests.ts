export class Requests{
  id: number;
  attempts: number;
  merchant_key: string;
  ref: string;
  is_expired: number;
  data: string;
  created_at: string;
  updated_at: string;
  currency_code: string;
  currency_id: number;
  clear(){
    this.id = undefined;
    this.attempts = undefined;
    this.merchant_key = '';
    this.ref = '';
    this.is_expired = undefined;
    this.data = '';
    this.created_at = '';
    this.updated_at = '';
    this.currency_code = '';
    this.currency_id = undefined;
  }
}
