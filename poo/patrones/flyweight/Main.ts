import FactoriaIconos from "./clases/factoriaIconos";

const factoriaIconos = new FactoriaIconos();

const icono1 = factoriaIconos.obtenerIcono("estrella", "estrella.png");
icono1.mostrar(10, 20);

const icono2 = factoriaIconos.obtenerIcono("estrella", "estrella.png");
icono2.mostrar(30, 40);

const icono3 = factoriaIconos.obtenerIcono("corazon", "corazon.png");
icono3.mostrar(50, 60);
