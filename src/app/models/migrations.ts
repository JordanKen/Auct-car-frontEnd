export class Migrations{
  id: number;
  migration: string;
  batch: number;
  clear(){
    this.id = undefined;
    this.migration = '';
    this.batch = undefined;
  }
}
