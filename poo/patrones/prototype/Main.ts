import Personaje from "./Personaje";

const personajeOriginal = new Personaje("Guerrero1", "Guerrero", 5);
const personajeClonado = personajeOriginal.clonar();
personajeClonado.setNivel(10);

console.log(personajeOriginal.getInfo());
console.log(personajeClonado.getInfo());
