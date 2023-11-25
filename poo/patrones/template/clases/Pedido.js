"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    templateMethod() {
        this.hacerPedido();
        this.enviarPedido();
        this.confirmarPedido();
    }
    confirmarPedido() {
        console.log("Pedido confirmado.");
    }
}
exports.Pedido = Pedido;
