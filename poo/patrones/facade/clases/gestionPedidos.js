"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GestionPedidos {
    generarPedido(producto, cantidad) {
        console.log(`Generando pedido de ${cantidad} unidades de ${producto}.`);
        return `Pedido #123`;
    }
}
exports.default = GestionPedidos;
