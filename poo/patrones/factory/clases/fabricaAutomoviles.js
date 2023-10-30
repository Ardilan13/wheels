"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabricaVehiculos_1 = __importDefault(require("./fabricaVehiculos"));
const Automovil_1 = __importDefault(require("./Automovil"));
class FabricaAutomoviles extends fabricaVehiculos_1.default {
    crearVehiculo() {
        return new Automovil_1.default();
    }
}
exports.default = FabricaAutomoviles;
