"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Figura {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return "Area: " + this.area() + " Perimetro: " + this.perimetro();
    }
}
exports.default = Figura;
