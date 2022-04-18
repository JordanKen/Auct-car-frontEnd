export class Ticketcomments{
  id: number;
  ticket_id: number;
  user_id: number;
  comment: string;
  created_at: string;
  updated_at: string;
  clear(){
    this.id = undefined;
    this.ticket_id = undefined;
    this.user_id = undefined;
    this.comment = '';
    this.created_at = '';
    this.updated_at = '';

  }
}
