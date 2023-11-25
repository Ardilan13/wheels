"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desconectado = exports.Conectado = void 0;
class Conectado {
    solicitar(conexion) {
        console.log("Realizando solicitud en conexión establecida.");
    }
}
exports.Conectado = Conectado;
class Desconectado {
    solicitar(conexion) {
        console.log("No se puede realizar la solicitud. La conexión está desconectada.");
    }
}
exports.Desconectado = Desconectado;
