"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Venta {
    constructor(implementacion) {
        this.implementacion = implementacion;
    }
    realizarVenta(monto) {
        const montoConvertido = this.implementacion.convertir(monto);
        console.log(`Venta realizada por un total de ${montoConvertido} en moneda local.`);
    }
}
exports.default = Venta;
