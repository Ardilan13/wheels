import { Usuario, Vehiculo, Ruta } from "./classes";

const usuario1 = new Usuario(1, "Carlos", "Conductor");
const vehiculo1 = new Vehiculo(5, "Carro", "ABC123", "Azul", "2021");
const vehiculo2 = new Vehiculo(2, "Moto", "DEF456", "Negra", "2020");
const ruta1 = new Ruta(
  "UIS 27",
  "Piedecuesta",
  ["CC Cacique", "Plaza Satelite", "CC Caracoli"],
  "10:00 AM",
  5000
);

console.log("Usuario:", usuario1);
console.log("Carro:", vehiculo1);
console.log("Moto:", vehiculo2);
console.log(ruta1.obtenerDatosRuta());
