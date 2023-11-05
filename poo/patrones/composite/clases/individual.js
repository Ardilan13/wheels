"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Individual {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
}
exports.default = Individual;
