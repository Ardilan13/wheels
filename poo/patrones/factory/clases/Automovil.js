"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehiculo_1 = __importDefault(require("./Vehiculo"));
class Automovil extends Vehiculo_1.default {
    ensamblar() {
        console.log("Ensamblaje de automóvil completado.");
    }
}
exports.default = Automovil;
