export class Translations{
  id: number;
  table_name: string;
  column_name: string;
  foreign_key: number;
  value: string;
  created_at: string;
  updated_at: string;

  clear(){
    this.id = undefined;
    this.table_name = '';
    this.column_name = '';
    this.foreign_key = undefined;
    this.value = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
