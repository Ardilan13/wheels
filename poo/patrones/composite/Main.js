"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const individual_1 = __importDefault(require("./clases/individual"));
const grupo_1 = __importDefault(require("./clases/grupo"));
const empleado1 = new individual_1.default("Juan", 1000);
const empleado2 = new individual_1.default("Maria", 1200);
const grupo = new grupo_1.default();
grupo.agregarEmpleado(empleado1);
grupo.agregarEmpleado(empleado2);
const salarioTotal = grupo.getSalario();
console.log(`El salario total del grupo es: ${salarioTotal}`);
