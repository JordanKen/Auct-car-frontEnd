export class Password_resets{
  email: string;
  token: string;
  created_at: string;
  clear(){
    this.email = '';
    this.token = '';
    this.created_at = '';
  }
}
