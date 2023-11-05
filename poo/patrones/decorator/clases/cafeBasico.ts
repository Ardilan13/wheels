import Cafe from "./cafe";

class CafeBasico implements Cafe {
  getDescripcion(): string {
    return "Café";
  }

  getPrecio(): number {
    return 5;
  }
}

export default CafeBasico;
