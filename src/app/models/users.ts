export class User{
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  telephone: string;
  sexe: string;
  password: string;
  avatar: File;
  isAdmin: string;


  clear(){
    this.id = undefined;
    this.name = undefined;
    this.surname = undefined;
    this.age = undefined;
    this.email = '';
    this.telephone = '';
    this.sexe = '';
    this.avatar = undefined;
    this.password = '';
    this.isAdmin = '';

  }
}
