import { PedidoInternet } from "./clases/PedidoInternet";
import { PedidoTienda } from "./clases/PedidoTienda";

const pedidoOnline = new PedidoInternet();
pedidoOnline.templateMethod();

const pedidoTienda = new PedidoTienda();
pedidoTienda.templateMethod();
