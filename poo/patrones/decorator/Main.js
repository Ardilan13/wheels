"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cafeBasico_1 = __importDefault(require("./clases/cafeBasico"));
const decoradorLeche_1 = __importDefault(require("./clases/decoradorLeche"));
const decoradorAzucar_1 = __importDefault(require("./clases/decoradorAzucar"));
let cafe = new cafeBasico_1.default();
console.log(`Pedido: ${cafe.getDescripcion()}, Precio: $${cafe.getPrecio()}`);
cafe = new decoradorLeche_1.default(cafe);
console.log(`Pedido: ${cafe.getDescripcion()}, Precio: $${cafe.getPrecio()}`);
cafe = new decoradorAzucar_1.default(cafe);
console.log(`Pedido: ${cafe.getDescripcion()}, Precio: $${cafe.getPrecio()}`);
