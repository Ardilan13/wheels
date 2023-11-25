export abstract class Pedido {
  templateMethod(): void {
    this.hacerPedido();
    this.enviarPedido();
    this.confirmarPedido();
  }

  abstract hacerPedido(): void;
  abstract enviarPedido(): void;

  confirmarPedido(): void {
    console.log("Pedido confirmado.");
  }
}
