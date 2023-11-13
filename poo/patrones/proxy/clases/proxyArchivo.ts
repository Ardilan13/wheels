import ArchivoReal from "./archivoReal";
import ArchivoRemoto from "./archivoRemoto";

class ProxyArchivo implements ArchivoRemoto {
  private archivoReal: ArchivoReal | null = null;
  private usuario: string;
  private contrasena: string;

  constructor(nombre: string, usuario: string, contrasena: string) {
    this.usuario = usuario;
    this.contrasena = contrasena;
    console.log(`Archivo proxy creado para: ${nombre}`);
  }

  private autenticar(): void {
    console.log(`Autenticando usuario: ${this.usuario}`);
  }

  descargar(): void {
    if (!this.archivoReal) {
      this.autenticar();
      this.archivoReal = new ArchivoReal("archivo_secreto.txt");
    }
    this.archivoReal.descargar();
  }
}

export default ProxyArchivo;
