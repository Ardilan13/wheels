"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personaje {
    constructor(nombre, tipo, nivel) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivel = nivel;
    }
    clonar() {
        const copia = new Personaje(this.nombre, this.tipo, this.nivel);
        return copia;
    }
    setNivel(nivel) {
        this.nivel = nivel;
    }
    getInfo() {
        return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Nivel: ${this.nivel}`;
    }
}
exports.default = Personaje;
