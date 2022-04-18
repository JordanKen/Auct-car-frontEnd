export class Merchants{
  id: number;
  user_id: number;
  otp: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;

  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.otp = '';
    this.created_at = '';
    this.updated_at = '';
    this.deleted_at = '';
  }
}
