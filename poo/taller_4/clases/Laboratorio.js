"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Laboratorio {
    constructor(servicioIni) {
        this.servicios = [];
        this.setServicio(servicioIni);
    }
    setServicio(servicio) {
        if (this.servicios.length < 100) {
            this.servicios.push(servicio);
        }
    }
    registrarMuestra(muestra, i) {
        if (0 <= i && i <= 99) {
            this.servicios[i].setMuestra(muestra);
        }
    }
    mostrarInforme() {
        this.servicios.forEach((element, i) => {
            var servicio = element.printServicio();
            console.log("\nServicio #" +
                i +
                ": \n Profundidad promedio " +
                servicio.especializadas +
                " muestras especializadas: " +
                servicio.promedioEspecializado +
                " \n Profundidad promedio " +
                servicio.simples +
                " muestras simples: " +
                servicio.promedioSimple +
                " \n Costo Total: " +
                servicio.costo);
        });
    }
    getLaboratorio() {
        return this.servicios;
    }
}
exports.default = Laboratorio;
