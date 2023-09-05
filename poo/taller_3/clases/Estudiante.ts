import Direccion from "./Direccion";
export default class Estudiante {
  public nombre: string;
  public nivel: number;
  public direccion?: Direccion;
  constructor(nombreIni: string, nivelIni: number, direccionIni?: Direccion) {
    this.nombre = nombreIni;
    this.nivel = nivelIni;
    this.direccion = direccionIni;
  }
  public setDireccion(direccionIni: Direccion): void {
    this.direccion = direccionIni;
  }
}
