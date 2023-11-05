import Cafe from "./clases/cafe";
import CafeBasico from "./clases/cafeBasico";
import DecoradorLeche from "./clases/decoradorLeche";
import DecoradorAzucar from "./clases/decoradorAzucar";

let cafe: Cafe = new CafeBasico();
console.log(`Pedido: ${cafe.getDescripcion()}, Precio: $${cafe.getPrecio()}`);

cafe = new DecoradorLeche(cafe);
console.log(`Pedido: ${cafe.getDescripcion()}, Precio: $${cafe.getPrecio()}`);

cafe = new DecoradorAzucar(cafe);
console.log(`Pedido: ${cafe.getDescripcion()}, Precio: $${cafe.getPrecio()}`);
