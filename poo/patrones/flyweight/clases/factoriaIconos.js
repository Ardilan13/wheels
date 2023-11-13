"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iconoFlyweight_1 = __importDefault(require("./iconoFlyweight"));
class FactoriaIconos {
    constructor() {
        this.iconos = {};
    }
    obtenerIcono(tipo, imagen) {
        if (!this.iconos[tipo]) {
            this.iconos[tipo] = new iconoFlyweight_1.default(tipo, imagen);
        }
        return this.iconos[tipo];
    }
}
exports.default = FactoriaIconos;
