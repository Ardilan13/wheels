"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Escuela {
    constructor(nombreIni) {
        this.estudiantes = [];
        this.nombre = nombreIni;
    }
    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
    imprimirNivel(nivel) {
        console.log(`Estudiantes de ${nivel} nivel:`);
        const estudiantes = this.estudiantes
            .filter((estudiante) => estudiante.nivel === nivel)
            .map((estudiante) => estudiante.nombre);
        console.log(estudiantes);
    }
}
exports.default = Escuela;
