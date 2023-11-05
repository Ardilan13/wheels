"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paypal_1 = __importDefault(require("./paypal"));
class AdaptadorStripe {
    constructor() {
        this.paypal = new paypal_1.default();
    }
    realizarPago(monto) {
        const montoEnDolares = monto / 100;
        this.paypal.realizarPagoPayPal(montoEnDolares);
    }
}
exports.default = AdaptadorStripe;
