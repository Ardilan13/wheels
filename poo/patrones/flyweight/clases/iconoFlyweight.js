"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IconoFlyweight {
    constructor(tipo, imagen) {
        this.tipo = tipo;
        this.imagen = imagen;
    }
    mostrar(posicionX, posicionY) {
        console.log(`Mostrando icono de tipo ${this.tipo} en (${posicionX}, ${posicionY})`);
    }
}
exports.default = IconoFlyweight;
