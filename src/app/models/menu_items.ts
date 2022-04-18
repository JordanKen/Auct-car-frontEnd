export class Menu_items{
  id: number;
  menu_id: number;
  title: string;
  url: string;
  target: string;
  icon_class: string;
  color: string;
  parent_id: number;
  order: number;
  created_at: string;
  updated_at: string;
  route: string;
  parameters: string;

  clear(){
    this.id = undefined;
    this.menu_id = undefined;
    this.title = '';
    this.url = '';
    this.target = '';
    this.icon_class = '';
    this.color = '';
    this.parent_id = undefined;
    this.order = undefined;
    this.created_at = '';
    this.updated_at = '';
    this.route = '';
    this.parameters = '';

  }
}
