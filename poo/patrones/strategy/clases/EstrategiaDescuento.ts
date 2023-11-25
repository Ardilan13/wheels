export interface EstrategiaDescuento {
  aplicarDescuento(precio: number): number;
}

export class DescuentoNavidad implements EstrategiaDescuento {
  aplicarDescuento(precio: number): number {
    return precio * 0.8;
  }
}

export class DescuentoBlackFriday implements EstrategiaDescuento {
  aplicarDescuento(precio: number): number {
    return precio * 0.5;
  }
}
