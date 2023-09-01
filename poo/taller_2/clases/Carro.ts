import Color from "./Color";
import Mapa from "./Mapa";

export default class Carro {
  public color: Color;
  public modelo: string;
  public anho: number;
  constructor(
    modeloIni: string,
    anhoIni: number,
    rojoIni?: number,
    azulIni?: number,
    verdeIni?: number
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
  }
}
