import {Utilisateurs} from '../backend/admin/parametrages/compte-utilisateur/utilisateurs.model';

// tslint:disable-next-line:class-name
export class Deposit_methods{
  id: number;
  name: string;
  // tslint:disable-next-line:variable-name
  how_to: string;
  // tslint:disable-next-line:variable-name
  json_data: string;
  // tslint:disable-next-line:variable-name
  created_at: string;
  // tslint:disable-next-line:variable-name
  updated_at: string;
  thumb: string;
  // tslint:disable-next-line:variable-name
  method_identifier_field__name: string;
  // tslint:disable-next-line:variable-name
  is_active: number;
}
export interface SearchResult {
  tables: Deposit_methods[];
  total: number;
}

