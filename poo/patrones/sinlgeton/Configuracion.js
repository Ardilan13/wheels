"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuracion {
    constructor() {
        this.configuracion = {};
    }
    static obtenerInstancia() {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }
    configurar(key, valor) {
        this.configuracion[key] = valor;
    }
    obtenerConfiguracion(key) {
        return this.configuracion[key];
    }
}
Configuracion.instancia = null;
exports.default = Configuracion;
