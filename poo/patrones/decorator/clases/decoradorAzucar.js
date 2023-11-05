"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DecoradorAzucar {
    constructor(cafe) {
        this.cafe = cafe;
    }
    getDescripcion() {
        return this.cafe.getDescripcion() + " con Azúcar";
    }
    getPrecio() {
        return this.cafe.getPrecio() + 1;
    }
}
exports.default = DecoradorAzucar;
