import Figura from "./Figura";

export default class Circulo extends Figura {
  private radio: number;
  constructor(radio: number, x: number, y: number) {
    super(x, y);
    this.radio = radio;
  }
  public area(): number {
    return Math.PI * this.radio * this.radio;
  }
  public perimetro(): number {
    return Math.PI * 2 * this.radio;
  }
}
