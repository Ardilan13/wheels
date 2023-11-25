"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EstrategiaDescuento_1 = require("./clases/EstrategiaDescuento");
const CarritoCompras_1 = require("./clases/CarritoCompras");
const carritoNavidad = new CarritoCompras_1.CarritoCompras(new EstrategiaDescuento_1.DescuentoNavidad());
const carritoBlackFriday = new CarritoCompras_1.CarritoCompras(new EstrategiaDescuento_1.DescuentoBlackFriday());
const precioProducto = 100;
console.log(carritoNavidad.calcularPrecioConDescuento(precioProducto)); // Salida: 80
console.log(carritoBlackFriday.calcularPrecioConDescuento(precioProducto)); // Salida: 50
