"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __importDefault(require("./Color"));
const Mapa_1 = __importDefault(require("./Mapa"));
class Carro {
    constructor(modeloIni, anhoIni, rojoIni, azulIni, verdeIni, escalaIni, ciudadIni) {
        this.modelo = modeloIni;
        this.anho = anhoIni;
        if (rojoIni !== undefined &&
            azulIni !== undefined &&
            verdeIni !== undefined) {
            this.color = new Color_1.default(rojoIni, verdeIni, azulIni);
        }
        else {
            this.color = new Color_1.default(0, 0, 0);
        }
        if (escalaIni !== undefined && ciudadIni !== undefined) {
            this.mapa = new Mapa_1.default(ciudadIni, escalaIni);
        }
        else {
            this.mapa = new Mapa_1.default("", 0);
        }
    }
}
exports.default = Carro;
