"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suscriptor = void 0;
class Suscriptor {
    constructor(nombre) {
        this.nombre = nombre;
    }
    actualizar(noticias) {
        console.log(`¡Hola ${this.nombre}! Nuevas noticias: ${noticias.join(", ")}`);
    }
}
exports.Suscriptor = Suscriptor;
