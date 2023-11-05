"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("./clases/stripe"));
const pasarelaPago = new stripe_1.default();
pasarelaPago.realizarPago(5000);
