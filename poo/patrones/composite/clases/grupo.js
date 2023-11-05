"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Grupo {
    constructor() {
        this.empleados = [];
    }
    agregarEmpleado(empleado) {
        this.empleados.push(empleado);
    }
    getSalario() {
        let salarioTotal = 0;
        this.empleados.forEach((empleado) => {
            salarioTotal += empleado.getSalario();
        });
        return salarioTotal;
    }
}
exports.default = Grupo;
