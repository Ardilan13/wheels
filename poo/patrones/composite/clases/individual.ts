import Empleado from "./empleado";

class Individual implements Empleado {
  private nombre: string;
  private salario: number;

  constructor(nombre: string, salario: number) {
    this.nombre = nombre;
    this.salario = salario;
  }

  getSalario(): number {
    return this.salario;
  }
}

export default Individual;
