"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoInternet = void 0;
const Pedido_1 = require("./Pedido");
class PedidoInternet extends Pedido_1.Pedido {
    hacerPedido() {
        console.log("Haciendo pedido en línea.");
    }
    enviarPedido() {
        console.log("Enviando pedido por mensajería.");
    }
}
exports.PedidoInternet = PedidoInternet;
