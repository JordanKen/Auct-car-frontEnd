export class Posts{
  id: number;
  author_id: number;
  category_id: number;
  title: string;
  seo_title: string;
  excerpt: string;
  body: string;
  image: string;
  slug: string;
  meta_description: string;
  meta_keywords: string;
  status: string;
  featured: number;
  created_at: string;
  updated_at: string;
  clear(){
    this.id = undefined;
    this.author_id = undefined;
    this.category_id = undefined;
    this.title = '';
    this.seo_title = '';
    this.excerpt = '';
    this.body = undefined;
    this.image = '';
    this.slug = '';
    this.meta_description = '';
    this.meta_keywords = '';
    this.status = '';
    this.featured = undefined;
    this.created_at = '';
    this.updated_at = '';
  }
}
