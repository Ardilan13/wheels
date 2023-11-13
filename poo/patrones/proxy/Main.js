"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const proxyArchivo_1 = __importDefault(require("./clases/proxyArchivo"));
const proxyArchivo = new proxyArchivo_1.default("archivo_secreto.txt", "usuario1", "clave123");
proxyArchivo.descargar();
const archivoNoAutenticado = new proxyArchivo_1.default("archivo1.txt", "usuario2", "clave456");
archivoNoAutenticado.descargar();
