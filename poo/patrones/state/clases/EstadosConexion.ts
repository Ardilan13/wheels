import { ConexionRed } from "./ConexionRed";

export interface EstadoConexion {
  solicitar(conexion: ConexionRed): void;
}

export class Conectado implements EstadoConexion {
  solicitar(conexion: ConexionRed): void {
    console.log("Realizando solicitud en conexión establecida.");
  }
}

export class Desconectado implements EstadoConexion {
  solicitar(conexion: ConexionRed): void {
    console.log(
      "No se puede realizar la solicitud. La conexión está desconectada."
    );
  }
}
