export class Data_types{
  id: number;
  name: string;
  slug: string;
  display_name_singular: string;
  display_name_plural: string;
  icon: string;
  model_name: string;
  policy_name: string;
  controller: string;
  description: string;
  generate_permissions: number;
  server_side: number;
  details: string;
  created_at: string;
  updated_at: string;
  clear(){
    this.id = undefined;
    this.name = '';
    this.slug = '';
    this.display_name_singular = '';
    this.display_name_plural = '';
    this.icon = '';
    this.model_name = '';
    this.policy_name = '';
    this.controller = '';
    this.description = '';
    this.generate_permissions = undefined;
    this.server_side = undefined;
    this.details = '';
    this.created_at = '';
    this.updated_at = '';
  }
}
