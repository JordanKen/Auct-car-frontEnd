export class Tickets{
  id: number;
  user_id: number;
  ticketcategory_id: number;
  ticket_id: string;
  title: string;
  priority: string;
  message: string;
  status: string;
  created_at: string;
  updated_at: string;
  clear(){
    this.id = undefined;
    this.user_id = undefined;
    this.ticketcategory_id = undefined
    this.ticket_id = '';
    this.title = '';
    this.priority = '';
    this.message = '';
    this.status = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
