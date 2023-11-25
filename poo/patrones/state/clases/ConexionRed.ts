import { EstadoConexion, Desconectado } from "./EstadosConexion";

export class ConexionRed {
  private estado: EstadoConexion;

  constructor() {
    this.estado = new Desconectado();
  }

  establecerEstado(estado: EstadoConexion): void {
    this.estado = estado;
  }

  solicitar(): void {
    this.estado.solicitar(this);
  }
}
