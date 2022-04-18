export class Profiles{
  id: number;
  user_id: number;
  document_type: string;
  document: string;
  phone_number: string;
  created_at: '';
  updated_at: '';
  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.document_type = '';
    this.document = '';
    this.phone_number = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
