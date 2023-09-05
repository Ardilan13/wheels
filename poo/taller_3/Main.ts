import Estudiante from "./clases/Estudiante";
import Direccion from "./clases/Direccion";
import Escuela from "./clases/Escuela";

const main: () => void = () => {
  const dir = new Direccion("Calle 25", "San Francisco", "Bucaramanga");

  const e1 = new Estudiante("Pedro", 10);
  //composicion
  const e2 = new Estudiante("Juan", 8, dir);
  //agregacion
  const e3 = new Estudiante("Carlos", 10);
  e3.setDireccion(dir);

  const escuela = new Escuela("La Salle");
  escuela.agregarEstudiante(e1);
  escuela.agregarEstudiante(e2);
  escuela.agregarEstudiante(e3);

  escuela.imprimirNivel(10);
};

main();
