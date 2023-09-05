"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Facultad {
    constructor(nombreIni) {
        this.escuelas = [];
        this.nombre = nombreIni;
    }
    agregarEscuelas(escuela) {
        this.escuelas.push(escuela);
    }
}
exports.default = Facultad;
