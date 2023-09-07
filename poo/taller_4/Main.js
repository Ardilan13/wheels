"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Muestra_1 = __importDefault(require("./clases/Muestra"));
const Servicio_1 = __importDefault(require("./clases/Servicio"));
const Laboratorio_1 = __importDefault(require("./clases/Laboratorio"));
const main = () => {
    const m1 = new Muestra_1.default("MSJDA333432NSA", 9);
    const m2 = new Muestra_1.default("CA82NDFI2", 11);
    const m3 = new Muestra_1.default("AIAKVDS82NDCS", 5);
    const m4 = new Muestra_1.default("IKSVDS912NDVNS83", 20);
    const s1 = new Servicio_1.default(m1);
    s1.setMuestra(m2);
    s1.setMuestra(m3);
    s1.setMuestra(m4);
    const s2 = new Servicio_1.default(m1);
    const l1 = new Laboratorio_1.default(s1);
    l1.setServicio(s2);
    l1.registrarMuestra(m1, 1);
    l1.registrarMuestra(m2, 1);
    l1.mostrarInforme();
};
main();
