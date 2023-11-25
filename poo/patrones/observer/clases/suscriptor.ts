import { Observador } from "./Observador";

export class Suscriptor implements Observador {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  actualizar(noticias: string[]): void {
    console.log(
      `¡Hola ${this.nombre}! Nuevas noticias: ${noticias.join(", ")}`
    );
  }
}
