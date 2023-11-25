"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editorial = void 0;
class Editorial {
    constructor() {
        this.noticias = [];
        this.observadores = [];
    }
    registrarObservador(obs) {
        this.observadores.push(obs);
    }
    eliminarObservador(obs) {
        this.observadores = this.observadores.filter((o) => o !== obs);
    }
    publicarNoticia(noticia) {
        this.noticias.push(noticia);
        this.notificarObservadores();
    }
    notificarObservadores() {
        this.observadores.forEach((obs) => obs.actualizar(this.noticias));
    }
}
exports.Editorial = Editorial;
