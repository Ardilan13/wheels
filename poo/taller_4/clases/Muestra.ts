/* import Estudiante from "./Estudiante";*/
export default class Muestra {
  private serial: string;
  private profundidad: number;
  private fecha = new Date();

  constructor(serialIni: string, profundidadIni: number) {
    this.serial = serialIni;
    this.profundidad = profundidadIni;
  }

  public getMuestra(): any {
    return {
      serial: this.serial,
      profundidad: this.profundidad,
      fecha: this.fecha,
    };
  }

  public getProfundidad(): number {
    return this.profundidad;
  }
}
