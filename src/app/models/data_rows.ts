export class Data_rows{
  id: number;
  data_type_id: number;
  field: string;
  type: string;
  display_name: string;
  required: string;
  browse: number;
  read: number;
  edit: number;
  add: number;
  delete: number;
  details: string;
  order: number;
  clear(){
    this.id = undefined;
    this.data_type_id = undefined;
    this.field = '';
    this.type = '';
    this.display_name = '';
    this.required = '';
    this.browse = undefined;
    this.read = undefined;
    this.edit = undefined;
    this.add = undefined;
    this.delete = undefined;
    this.details = '';
    this.order = undefined;
  }
}
