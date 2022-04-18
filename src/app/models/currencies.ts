export class Currencies{
  id: number;
  name: string;
  symbol: string;
  created_at: string;
  updated_at: string;
  code: string;
  is_cripto: string;
  thumb: number;
  clear(){
    this.id = undefined;
    this.name = '';
    this.symbol = '';
    this.created_at = '';
    this.updated_at = '';
    this.code = '';
    this.is_cripto = '';
    this.thumb = undefined;
  }
}
