import { EstrategiaDescuento } from "./EstrategiaDescuento";

export class CarritoCompras {
  private estrategiaDescuento: EstrategiaDescuento;

  constructor(estrategia: EstrategiaDescuento) {
    this.estrategiaDescuento = estrategia;
  }

  calcularPrecioConDescuento(precio: number): number {
    return this.estrategiaDescuento.aplicarDescuento(precio);
  }
}
