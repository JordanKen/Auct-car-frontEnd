// Table data
export class Utilisateurs {
  name: string;
  position: string;
  office: string;
  age: number;
  date: string;
  salary: string;
}
// Search Data
export interface SearchResult {
  tables: Utilisateurs[];
  total: number;
}
