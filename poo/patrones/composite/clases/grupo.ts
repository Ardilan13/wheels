import Empleado from "./empleado";

class Grupo implements Empleado {
  private empleados: Empleado[] = [];

  agregarEmpleado(empleado: Empleado): void {
    this.empleados.push(empleado);
  }

  getSalario(): number {
    let salarioTotal = 0;
    this.empleados.forEach((empleado) => {
      salarioTotal += empleado.getSalario();
    });
    return salarioTotal;
  }
}

export default Grupo;
