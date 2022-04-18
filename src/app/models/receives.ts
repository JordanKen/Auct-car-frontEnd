import {Country} from './country';

export class Receives{
  id: number;
  user_id: number;
  send_id: number;
  from_id: number;
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
}
export interface SearchResult {
  tables: Receives[];
  total: number;
}
