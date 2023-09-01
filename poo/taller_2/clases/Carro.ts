import Color from "./Color";
import Mapa from "./Mapa";

export default class Carro {
  public color: Color;
  public modelo: string;
  public anho: number;
  public mapa: Mapa;
  constructor(
    modeloIni: string,
    anhoIni: number,
    rojoIni?: number,
    azulIni?: number,
    verdeIni?: number,
    escalaIni?: number,
    ciudadIni?: string
  ) {
    this.modelo = modeloIni;
    this.anho = anhoIni;
    if (
      rojoIni !== undefined &&
      azulIni !== undefined &&
      verdeIni !== undefined
    ) {
      this.color = new Color(rojoIni, verdeIni, azulIni);
    } else {
      this.color = new Color(0, 0, 0);
    }

    if (escalaIni !== undefined && ciudadIni !== undefined) {
      this.mapa = new Mapa(ciudadIni, escalaIni);
    } else {
      this.mapa = new Mapa("", 0);
    }
  }
}
