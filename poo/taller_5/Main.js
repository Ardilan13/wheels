"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Circulo_1 = __importDefault(require("./clases/Circulo"));
const main = () => {
    var figs = [];
    figs[0] = new Circulo_1.default(10, 5, 6);
    for (var i = 0; i < figs.length; i++) {
        const fig = figs[i];
        console.log(fig.toString());
    }
};
main();
