import { Pedido } from "./Pedido";

export class PedidoInternet extends Pedido {
  hacerPedido(): void {
    console.log("Haciendo pedido en línea.");
  }

  enviarPedido(): void {
    console.log("Enviando pedido por mensajería.");
  }
}
