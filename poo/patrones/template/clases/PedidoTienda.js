"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoTienda = void 0;
const Pedido_1 = require("./Pedido");
class PedidoTienda extends Pedido_1.Pedido {
    hacerPedido() {
        console.log("Haciendo pedido en la tienda física.");
    }
    enviarPedido() {
        console.log("Cliente recoge el pedido en la tienda.");
    }
}
exports.PedidoTienda = PedidoTienda;
