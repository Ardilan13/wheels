"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ManejoInventario {
    verificarDisponibilidad(producto) {
        console.log(`Verificando disponibilidad de ${producto} en el inventario.`);
        return Math.random() < 0.8;
    }
}
exports.default = ManejoInventario;
