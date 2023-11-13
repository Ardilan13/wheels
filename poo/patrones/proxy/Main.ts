import ArchivoRemoto from "./clases/archivoRemoto";
import ProxyArchivo from "./clases/proxyArchivo";

const proxyArchivo: ArchivoRemoto = new ProxyArchivo(
  "archivo_secreto.txt",
  "usuario1",
  "clave123"
);
proxyArchivo.descargar();

const archivoNoAutenticado: ArchivoRemoto = new ProxyArchivo(
  "archivo1.txt",
  "usuario2",
  "clave456"
);
archivoNoAutenticado.descargar();
