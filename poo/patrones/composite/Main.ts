import Empleado from "./clases/empleado";
import Individual from "./clases/individual";
import Grupo from "./clases/grupo";

const empleado1 = new Individual("Juan", 1000);
const empleado2 = new Individual("Maria", 1200);

const grupo = new Grupo();
grupo.agregarEmpleado(empleado1);
grupo.agregarEmpleado(empleado2);

const salarioTotal = grupo.getSalario();
console.log(`El salario total del grupo es: ${salarioTotal}`);
