import {Deposit_methods} from './deposit_methods';

export class Withdrawal_methods{
  id: number;
  name: string;
  comment: string;
  percentage_fee: number;
  fixed_fee: number;
  json_data: string;
  created_at: string;
  updated_at: string;
  thumb: string;
  method_identifier_field__name: string;
  is_active: number;
}
export interface SearchResult {
  tables: Withdrawal_methods[];
  total: number;
}
