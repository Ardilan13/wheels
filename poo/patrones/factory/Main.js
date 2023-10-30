"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabricaAutomoviles_1 = __importDefault(require("./clases/fabricaAutomoviles"));
const fabricaMotocicletas_1 = __importDefault(require("./clases/fabricaMotocicletas"));
const fabricaAutomoviles = new fabricaAutomoviles_1.default();
const automovil = fabricaAutomoviles.crearVehiculo();
automovil.ensamblar();
const fabricaMotocicletas = new fabricaMotocicletas_1.default();
const motocicleta = fabricaMotocicletas.crearVehiculo();
motocicleta.ensamblar();
