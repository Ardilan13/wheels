"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const archivoReal_1 = __importDefault(require("./archivoReal"));
class ProxyArchivo {
    constructor(nombre, usuario, contrasena) {
        this.archivoReal = null;
        this.usuario = usuario;
        this.contrasena = contrasena;
        console.log(`Archivo proxy creado para: ${nombre}`);
    }
    autenticar() {
        console.log(`Autenticando usuario: ${this.usuario}`);
    }
    descargar() {
        if (!this.archivoReal) {
            this.autenticar();
            this.archivoReal = new archivoReal_1.default("archivo_secreto.txt");
        }
        this.archivoReal.descargar();
    }
}
exports.default = ProxyArchivo;
