import ImplementacionMoneda from "./implementacionMoneda";

class Venta {
  protected implementacion: ImplementacionMoneda;

  constructor(implementacion: ImplementacionMoneda) {
    this.implementacion = implementacion;
  }

  realizarVenta(monto: number): void {
    const montoConvertido = this.implementacion.convertir(monto);
    console.log(
      `Venta realizada por un total de ${montoConvertido} en moneda local.`
    );
  }
}

export default Venta;
