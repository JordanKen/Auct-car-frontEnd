export class Menus{
  id: number;
  name: string;
  created_at: string;
  updated_at: string;

  clear(){
    this.id = undefined;
    this.name = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
