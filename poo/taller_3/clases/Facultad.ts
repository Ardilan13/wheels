import Escuela from "./Escuela";
export default class Facultad {
  public nombre: string;
  public escuelas: Escuela[] = [];
  constructor(nombreIni: string) {
    this.nombre = nombreIni;
  }
  public agregarEscuelas(escuela: Escuela): void {
    this.escuelas.push(escuela);
  }
}
