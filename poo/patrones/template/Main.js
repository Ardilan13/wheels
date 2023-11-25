"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PedidoInternet_1 = require("./clases/PedidoInternet");
const PedidoTienda_1 = require("./clases/PedidoTienda");
const pedidoOnline = new PedidoInternet_1.PedidoInternet();
pedidoOnline.templateMethod();
const pedidoTienda = new PedidoTienda_1.PedidoTienda();
pedidoTienda.templateMethod();
