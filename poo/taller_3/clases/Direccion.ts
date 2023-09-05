export default class Direccion {
  public texto: string;
  public barrio: string;
  public ciudad: string;
  constructor(textoIni: string, barrioIni: string, ciudadIni: string) {
    this.texto = textoIni;
    this.barrio = barrioIni;
    this.ciudad = ciudadIni;
  }
}
