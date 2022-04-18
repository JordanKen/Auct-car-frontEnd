

export class Deposits{
  id: number;
  user_id: number;
  transaction_state_id: number;
  deposit_method_id: number;
  gross: number;
  fee: number;
  net: number;
  transaction_receipt: string;
  json_data: string;
  created_at: string;
  updated_at: string;
  currency_id: number;
  currency_symbol: string;
  wallet_id: number;
  message: string;
}
export interface SearchResult {
  tables: Deposits[];
  total: number;
}

