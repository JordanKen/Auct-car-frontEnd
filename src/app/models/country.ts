export class Country {
  id: number;
  code: string;
  name: string;
  nicename: string;
  iso3: string;
  numcode: number;
  prefix: string;
  // tslint:disable-next-line:variable-name
  created_at: string;
  // tslint:disable-next-line:variable-name
  updated_at: string;
  // tslint:disable-next-line:variable-name
  deleted_at: string;
}
export interface SearchResult {
  tables: Country[];
  total: number;
}
