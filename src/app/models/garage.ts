export class Garage{
  id: number;
  name: string;
  avatar: File;
  openHour: Date;
  lockHour: Date;
  description: string;

  clear(){
    this.id = undefined;
    this.name = undefined;
    this.avatar = undefined;
    this.openHour = undefined;
    this.lockHour = undefined;
    this.description = undefined;
  }
}
