export class Roles{
  id: number;
  name: string;
  display_name: string;
  is_active: number;
  created_at: string;
  updated_at: string;
  clear(){
    this.id = undefined;
    this.name = '';
    this.display_name = '';
    this.is_active = undefined;
    this.created_at = '';
    this.updated_at = '';

  }
}
