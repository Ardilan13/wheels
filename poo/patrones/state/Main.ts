import { ConexionRed } from "./clases/ConexionRed";
import { Conectado, Desconectado } from "./clases/EstadosConexion";

const conexion = new ConexionRed();

conexion.solicitar();

conexion.establecerEstado(new Conectado());
conexion.solicitar();
