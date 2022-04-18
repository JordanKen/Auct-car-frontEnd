export class Settings{
  id: number;
  key: string;
  display_name: string;
  value: string;
  details: string;
  type: string;
  order: number;
  group: string;
  clear(){
    this.id = undefined;
    this.key = '';
    this.display_name = ''
    this.value = '';
    this.details = '';
    this.type = '';
    this.order = undefined;
    this.group = '';

  }
}
