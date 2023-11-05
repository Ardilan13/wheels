import Venta from "./clases/venta";
import dolar from "./clases/dolar";
import euro from "./clases/euro";

const Dolar = new dolar();
const Euro = new euro();

const ventaEnDolares = new Venta(Dolar);
ventaEnDolares.realizarVenta(100);

const ventaEnEuros = new Venta(Euro);
ventaEnEuros.realizarVenta(100);
