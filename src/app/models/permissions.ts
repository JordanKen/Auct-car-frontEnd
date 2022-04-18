export class Permissions{
  id: number;
  key: string;
  table_name: string;
  created_at: string;
  updated_at: string;
  clear(){
    this.id = undefined;
    this.key = '';
    this.table_name = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
