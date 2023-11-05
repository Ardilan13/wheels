import Cafe from "./cafe";

class DecoradorAzucar implements Cafe {
  private cafe: Cafe;

  constructor(cafe: Cafe) {
    this.cafe = cafe;
  }

  getDescripcion(): string {
    return this.cafe.getDescripcion() + " con Azúcar";
  }

  getPrecio(): number {
    return this.cafe.getPrecio() + 1;
  }
}

export default DecoradorAzucar;
