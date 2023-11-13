"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const manejoInventario_1 = __importDefault(require("./manejoInventario"));
const gestionPedidos_1 = __importDefault(require("./gestionPedidos"));
const procesamientoPagos_1 = __importDefault(require("./procesamientoPagos"));
class Compras {
    constructor() {
        this.manejoInventario = new manejoInventario_1.default();
        this.gestionPedidos = new gestionPedidos_1.default();
        this.procesamientoPagos = new procesamientoPagos_1.default();
    }
    realizarCompra(producto, cantidad, monto) {
        const disponible = this.manejoInventario.verificarDisponibilidad(producto);
        if (disponible) {
            const numeroPedido = this.gestionPedidos.generarPedido(producto, cantidad);
            const pagoExitoso = this.procesamientoPagos.procesarPago(monto);
            if (pagoExitoso) {
                console.log(`Compra exitosa. Pedido: ${numeroPedido}`);
            }
            else {
                console.log("Error en el procesamiento del pago. La compra no pudo ser completada.");
            }
        }
        else {
            console.log(`El producto ${producto} no está disponible en el inventario.`);
        }
    }
}
exports.default = Compras;
