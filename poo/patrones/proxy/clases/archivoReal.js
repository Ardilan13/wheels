"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArchivoReal {
    constructor(nombre) {
        this.nombre = nombre;
        console.log(`Descargando archivo real: ${this.nombre}`);
    }
    descargar() {
        console.log(`Obteniendo archivo real: ${this.nombre}`);
    }
}
exports.default = ArchivoReal;
