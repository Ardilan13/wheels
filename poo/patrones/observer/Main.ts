import { Editorial } from "./clases/editorial";
import { Suscriptor } from "./clases/suscriptor";

const editorial = new Editorial();

const suscriptor1 = new Suscriptor("Carlos");
const suscriptor2 = new Suscriptor("Ana");

editorial.registrarObservador(suscriptor1);
editorial.registrarObservador(suscriptor2);

editorial.publicarNoticia("Nuevo artículo publicado");
