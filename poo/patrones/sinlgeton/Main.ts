import Configuracion from "./Configuracion";

const configuracion = Configuracion.obtenerInstancia();

configuracion.configurar("idioma", "español");
configuracion.configurar("tema", "oscuro");

const idioma = configuracion.obtenerConfiguracion("idioma");
const tema = configuracion.obtenerConfiguracion("tema");

console.log(`Idioma: ${idioma}, Tema: ${tema}`);
