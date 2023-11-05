"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const venta_1 = __importDefault(require("./clases/venta"));
const dolar_1 = __importDefault(require("./clases/dolar"));
const euro_1 = __importDefault(require("./clases/euro"));
const Dolar = new dolar_1.default();
const Euro = new euro_1.default();
const ventaEnDolares = new venta_1.default(Dolar);
ventaEnDolares.realizarVenta(100);
const ventaEnEuros = new venta_1.default(Euro);
ventaEnEuros.realizarVenta(100);
