"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./clases/Carro"));
const main = () => {
    const carro = new Carro_1.default("Toyota", 2006);
    const carro1 = new Carro_1.default("Mercedes", 2020, 255, 0, 180);
    console.log(carro, carro1);
};
main();
