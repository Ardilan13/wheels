"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConexionRed_1 = require("./clases/ConexionRed");
const EstadosConexion_1 = require("./clases/EstadosConexion");
const conexion = new ConexionRed_1.ConexionRed();
conexion.solicitar();
conexion.establecerEstado(new EstadosConexion_1.Conectado());
conexion.solicitar();
