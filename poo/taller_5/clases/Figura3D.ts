import Figura from "./Figura";
export default abstract class Figura3D extends Figura {
  protected z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  public abstract volumen(): number;
}
