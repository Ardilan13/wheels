export default abstract class Figura {
  public abstract area(): number;
  public abstract perimetro(): number;
  protected x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public toString() {
    return "Area: " + this.area() + " Perimetro: " + this.perimetro();
  }
}
