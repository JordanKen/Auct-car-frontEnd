import {Country} from './country';

export class Transactionable{
  id: number;
  user_id: number;
  request_id: number;
  transactionable_id: number;
  transactionable_type: string;
  entity_id: number;
  entity_name: string;
  transaction_state_id: number;
  currency: string;
  activity_title: string;
  money_flow: string;
  gross: number;
  fee: number;
  net: number;
  balance: number;
  json_data: string;
  created_at: string;
  updated_at: string;
  currency_id: number;
  currency_symbol: string;
  thumb: string;
}
export interface SearchResult {
  tables: Transactionable[];
  total: number;
}
