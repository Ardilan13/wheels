import Estudiante from "./Estudiante";
export default class Escuela {
  public nombre: string;
  public estudiantes: Estudiante[] = [];
  constructor(nombreIni: string) {
    this.nombre = nombreIni;
  }
  public agregarEstudiante(estudiante: Estudiante): void {
    this.estudiantes.push(estudiante);
  }
  public imprimirNivel(nivel: number): void {
    console.log(`Estudiantes de ${nivel} nivel:`);
    const estudiantes = this.estudiantes
      .filter((estudiante) => estudiante.nivel === nivel)
      .map((estudiante) => estudiante.nombre);
    console.log(estudiantes);
  }
}
