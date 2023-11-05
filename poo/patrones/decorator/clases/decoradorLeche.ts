import Cafe from "./cafe";

class DecoradorLeche implements Cafe {
  private cafe: Cafe;

  constructor(cafe: Cafe) {
    this.cafe = cafe;
  }

  getDescripcion(): string {
    return this.cafe.getDescripcion() + " con Leche";
  }

  getPrecio(): number {
    return this.cafe.getPrecio() + 2;
  }
}

export default DecoradorLeche;
