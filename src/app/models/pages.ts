export class Pages{
  id: number;
  author_id: number;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  slug: string;
  meta_description: string;
  meta_keywords: string;
  status: string;
  created_at: string;
  updated_at: string;
  clear(){
    this.id = undefined;
    this.author_id = undefined;
    this.title = '';
    this.excerpt = '';
    this.body = '';
    this.image = '';
    this.slug = '';
    this.meta_description = '';
    this.meta_keywords = '';
    this.status = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
