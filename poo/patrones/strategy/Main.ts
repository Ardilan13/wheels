import {
  DescuentoNavidad,
  DescuentoBlackFriday,
} from "./clases/EstrategiaDescuento";
import { CarritoCompras } from "./clases/CarritoCompras";

const carritoNavidad = new CarritoCompras(new DescuentoNavidad());
const carritoBlackFriday = new CarritoCompras(new DescuentoBlackFriday());

const precioProducto = 100;
console.log(carritoNavidad.calcularPrecioConDescuento(precioProducto)); // Salida: 80
console.log(carritoBlackFriday.calcularPrecioConDescuento(precioProducto)); // Salida: 50
