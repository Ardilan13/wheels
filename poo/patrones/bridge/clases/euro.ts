import ImplementacionMoneda from "./implementacionMoneda";

class MonedaEuro implements ImplementacionMoneda {
  convertir(monto: number): number {
    return monto * 0.85;
  }
}

export default MonedaEuro;
