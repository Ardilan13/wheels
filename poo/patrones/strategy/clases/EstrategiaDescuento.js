"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescuentoBlackFriday = exports.DescuentoNavidad = void 0;
class DescuentoNavidad {
    aplicarDescuento(precio) {
        return precio * 0.8;
    }
}
exports.DescuentoNavidad = DescuentoNavidad;
class DescuentoBlackFriday {
    aplicarDescuento(precio) {
        return precio * 0.5;
    }
}
exports.DescuentoBlackFriday = DescuentoBlackFriday;
