export class Rapport{
  id: number;
  moteur: string;
  vehiculeId: number;
  carrosserie: string;
  etatGeneral: string;
  description: string;

  clear(){
    this.id = undefined;
    this.moteur = undefined;
    this.vehiculeId = undefined;
    this.carrosserie = undefined;
    this.etatGeneral = undefined;
    this.description = undefined;
  }
}
