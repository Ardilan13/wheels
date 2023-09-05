"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudiante {
    constructor(nombreIni, nivelIni, direccionIni) {
        this.nombre = nombreIni;
        this.nivel = nivelIni;
        this.direccion = direccionIni;
    }
    setDireccion(direccionIni) {
        this.direccion = direccionIni;
    }
}
exports.default = Estudiante;
