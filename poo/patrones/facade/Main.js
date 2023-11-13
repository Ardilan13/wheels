"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compras_1 = __importDefault(require("./clases/compras"));
const compraFacade = new compras_1.default();
compraFacade.realizarCompra("Laptop", 1, 1200);
compraFacade.realizarCompra("Teléfono", 2, 800);
