"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estudiante_1 = __importDefault(require("./clases/Estudiante"));
const Direccion_1 = __importDefault(require("./clases/Direccion"));
const Escuela_1 = __importDefault(require("./clases/Escuela"));
const main = () => {
    const dir = new Direccion_1.default("Calle 25", "San Francisco", "Bucaramanga");
    const e1 = new Estudiante_1.default("Pedro", 10);
    //composicion
    const e2 = new Estudiante_1.default("Juan", 8, dir);
    //agregacion
    const e3 = new Estudiante_1.default("Carlos", 10);
    e3.setDireccion(dir);
    const escuela = new Escuela_1.default("La Salle");
    escuela.agregarEstudiante(e1);
    escuela.agregarEstudiante(e2);
    escuela.agregarEstudiante(e3);
    escuela.imprimirNivel(10);
};
main();
