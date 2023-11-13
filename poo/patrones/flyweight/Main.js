"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const factoriaIconos_1 = __importDefault(require("./clases/factoriaIconos"));
const factoriaIconos = new factoriaIconos_1.default();
const icono1 = factoriaIconos.obtenerIcono("estrella", "estrella.png");
icono1.mostrar(10, 20);
const icono2 = factoriaIconos.obtenerIcono("estrella", "estrella.png");
icono2.mostrar(30, 40);
const icono3 = factoriaIconos.obtenerIcono("corazon", "corazon.png");
icono3.mostrar(50, 60);
