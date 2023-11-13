import ArchivoRemoto from "./archivoRemoto";

class ArchivoReal implements ArchivoRemoto {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
    console.log(`Descargando archivo real: ${this.nombre}`);
  }

  descargar(): void {
    console.log(`Obteniendo archivo real: ${this.nombre}`);
  }
}

export default ArchivoReal;
