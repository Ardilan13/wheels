"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementoB = exports.ElementoA = void 0;
class ElementoA {
    aceptar(visitante) {
        visitante.visitarElementoA(this);
    }
    operacionA() {
        return "Operación A en Elemento A";
    }
}
exports.ElementoA = ElementoA;
class ElementoB {
    aceptar(visitante) {
        visitante.visitarElementoB(this);
    }
    operacionB() {
        return "Operación B en Elemento B";
    }
}
exports.ElementoB = ElementoB;
