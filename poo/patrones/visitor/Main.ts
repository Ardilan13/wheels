import { ElementoA, ElementoB } from "./clases/Elemento";
import { VisitanteConcreto } from "./clases/Visitante";

// Creación de elementos visitables
const elementoA = new ElementoA();
const elementoB = new ElementoB();

// Creación de visitante
const visitante = new VisitanteConcreto();

// Utilización del patrón Visitor
elementoA.aceptar(visitante);
elementoB.aceptar(visitante);
