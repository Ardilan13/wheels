import ManejoInventario from "./manejoInventario";
import GestionPedidos from "./gestionPedidos";
import ProcesamientoPagos from "./procesamientoPagos";

class Compras {
  private manejoInventario: ManejoInventario;
  private gestionPedidos: GestionPedidos;
  private procesamientoPagos: ProcesamientoPagos;

  constructor() {
    this.manejoInventario = new ManejoInventario();
    this.gestionPedidos = new GestionPedidos();
    this.procesamientoPagos = new ProcesamientoPagos();
  }

  realizarCompra(producto: string, cantidad: number, monto: number): void {
    const disponible = this.manejoInventario.verificarDisponibilidad(producto);

    if (disponible) {
      const numeroPedido = this.gestionPedidos.generarPedido(
        producto,
        cantidad
      );
      const pagoExitoso = this.procesamientoPagos.procesarPago(monto);

      if (pagoExitoso) {
        console.log(`Compra exitosa. Pedido: ${numeroPedido}`);
      } else {
        console.log(
          "Error en el procesamiento del pago. La compra no pudo ser completada."
        );
      }
    } else {
      console.log(
        `El producto ${producto} no está disponible en el inventario.`
      );
    }
  }
}

export default Compras;
