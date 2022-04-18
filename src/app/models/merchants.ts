import {Country} from './country';

export class Merchants{
  id: number;
  user_id: number;
  merchant_key	: string;
  site_url: string;
  success_link: string;
  fail_link: string;
  logo: string;
  name: string;
  description: string;
  json_data: string;
  created_at: string;
  updated_at: string;
  currency_id: number;
  thumb: string;
}
export interface SearchResult {
  tables: Merchants[];
  total: number;
}
