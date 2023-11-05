import ImplementacionMoneda from "./implementacionMoneda";

class MonedaDolar implements ImplementacionMoneda {
  convertir(monto: number): number {
    return monto;
  }
}

export default MonedaDolar;
