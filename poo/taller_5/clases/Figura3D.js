"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Figura_1 = __importDefault(require("./Figura"));
class Figura3D extends Figura_1.default {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
}
exports.default = Figura3D;
