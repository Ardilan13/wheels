"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personaje_1 = __importDefault(require("./Personaje"));
const personajeOriginal = new Personaje_1.default("Guerrero1", "Guerrero", 5);
const personajeClonado = personajeOriginal.clonar();
personajeClonado.setNivel(10);
console.log(personajeOriginal.getInfo());
console.log(personajeClonado.getInfo());
