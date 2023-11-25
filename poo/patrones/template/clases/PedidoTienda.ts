import { Pedido } from "./Pedido";

export class PedidoTienda extends Pedido {
  hacerPedido(): void {
    console.log("Haciendo pedido en la tienda física.");
  }

  enviarPedido(): void {
    console.log("Cliente recoge el pedido en la tienda.");
  }
}
