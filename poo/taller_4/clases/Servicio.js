"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Servicio {
    constructor(muestraIni) {
        this.muestraSimple = [];
        this.muestraEspecializada = [];
        this.setMuestra(muestraIni);
    }
    setMuestra(muestra) {
        if (muestra.getProfundidad() <= 10 && this.muestraSimple.length < 30) {
            this.muestraSimple.push(muestra);
        }
        else if (this.muestraEspecializada.length < 30) {
            this.muestraEspecializada.push(muestra);
        }
    }
    getServicio() {
        return {
            muestraSimple: this.muestraSimple,
            muestraEspecializada: this.muestraEspecializada,
        };
    }
    printServicio() {
        var profundidadSimple = 0;
        var profundidadEspecializado = 0;
        var costo = 0;
        this.muestraSimple.forEach((muestra) => {
            profundidadSimple += muestra.getProfundidad();
            costo += 400000;
        });
        this.muestraEspecializada.forEach((muestra) => {
            profundidadEspecializado += muestra.getProfundidad();
            costo += 1000000;
        });
        return {
            simples: this.muestraSimple.length,
            especializadas: this.muestraEspecializada.length,
            promedioSimple: profundidadSimple / this.muestraSimple.length,
            promedioEspecializado: profundidadEspecializado / this.muestraEspecializada.length,
            costo: costo,
        };
    }
}
exports.default = Servicio;
