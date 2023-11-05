"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DecoradorLeche {
    constructor(cafe) {
        this.cafe = cafe;
    }
    getDescripcion() {
        return this.cafe.getDescripcion() + " con Leche";
    }
    getPrecio() {
        return this.cafe.getPrecio() + 2;
    }
}
exports.default = DecoradorLeche;
