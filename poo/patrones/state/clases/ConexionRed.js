"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConexionRed = void 0;
const EstadosConexion_1 = require("./EstadosConexion");
class ConexionRed {
    constructor() {
        this.estado = new EstadosConexion_1.Desconectado();
    }
    establecerEstado(estado) {
        this.estado = estado;
    }
    solicitar() {
        this.estado.solicitar(this);
    }
}
exports.ConexionRed = ConexionRed;
