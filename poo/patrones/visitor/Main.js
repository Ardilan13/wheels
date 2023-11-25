"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Elemento_1 = require("./clases/Elemento");
const Visitante_1 = require("./clases/Visitante");
// Creación de elementos visitables
const elementoA = new Elemento_1.ElementoA();
const elementoB = new Elemento_1.ElementoB();
// Creación de visitante
const visitante = new Visitante_1.VisitanteConcreto();
// Utilización del patrón Visitor
elementoA.aceptar(visitante);
elementoB.aceptar(visitante);
