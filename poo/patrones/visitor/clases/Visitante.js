"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitanteConcreto = void 0;
class VisitanteConcreto {
    visitarElementoA(elemento) {
        console.log(elemento.operacionA());
    }
    visitarElementoB(elemento) {
        console.log(elemento.operacionB());
    }
}
exports.VisitanteConcreto = VisitanteConcreto;
