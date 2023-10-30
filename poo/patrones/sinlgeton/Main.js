"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Configuracion_1 = __importDefault(require("./Configuracion"));
const configuracion = Configuracion_1.default.obtenerInstancia();
configuracion.configurar("idioma", "español");
configuracion.configurar("tema", "oscuro");
const idioma = configuracion.obtenerConfiguracion("idioma");
const tema = configuracion.obtenerConfiguracion("tema");
console.log(`Idioma: ${idioma}, Tema: ${tema}`);
