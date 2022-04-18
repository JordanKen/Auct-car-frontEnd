export class Permission_role{
  permission_id: number;
  role_id: number;
  clear(){
    this.permission_id = undefined;
    this.role_id = undefined;
  }
}
