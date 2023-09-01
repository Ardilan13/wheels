export default class Mapa {
  public escala: number;
  public ciudad: string;
  constructor(ciudadIni: string, escalaIni: number) {
    this.ciudad = ciudadIni;
    this.escala = escalaIni;
  }
}
