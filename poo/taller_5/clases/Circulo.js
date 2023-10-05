"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Figura_1 = __importDefault(require("./Figura"));
class Circulo extends Figura_1.default {
    constructor(radio, x, y) {
        super(x, y);
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
    perimetro() {
        return Math.PI * 2 * this.radio;
    }
}
exports.default = Circulo;
