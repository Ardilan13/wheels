"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* import Estudiante from "./Estudiante";*/
class Muestra {
    constructor(serialIni, profundidadIni) {
        this.fecha = new Date();
        this.serial = serialIni;
        this.profundidad = profundidadIni;
    }
    getMuestra() {
        return {
            serial: this.serial,
            profundidad: this.profundidad,
            fecha: this.fecha,
        };
    }
    getProfundidad() {
        return this.profundidad;
    }
}
exports.default = Muestra;
