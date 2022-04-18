export class Transaction_states{
  id: number;
  name: string;
  json_data: string;
  created_at: string;
  updated_at: string;
  clear(){
    this.id = undefined;
    this.name = '';
    this.json_data = '';
    this.created_at = '';
    this.updated_at = '';

  }
}
