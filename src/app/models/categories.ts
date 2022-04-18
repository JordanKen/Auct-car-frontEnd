export class Categories {
  id: number;
  parent_id: number;
  oder: number;
  email: string;
  name: string;
  slug: string;
  created_at: String;
  updated_at: String;

  clear(): void {
    this.id = undefined;
    this.parent_id = undefined;
    this.oder = undefined;
    this.email = '';
    this.name = '';
    this.slug = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
