"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fabricaVehiculos_1 = __importDefault(require("./fabricaVehiculos"));
const Motocicleta_1 = __importDefault(require("./Motocicleta"));
class FabricaMotocicletas extends fabricaVehiculos_1.default {
    crearVehiculo() {
        return new Motocicleta_1.default();
    }
}
exports.default = FabricaMotocicletas;
