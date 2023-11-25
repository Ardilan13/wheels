"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarritoCompras = void 0;
class CarritoCompras {
    constructor(estrategia) {
        this.estrategiaDescuento = estrategia;
    }
    calcularPrecioConDescuento(precio) {
        return this.estrategiaDescuento.aplicarDescuento(precio);
    }
}
exports.CarritoCompras = CarritoCompras;
