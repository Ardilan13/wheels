"use strict";
class MaquinaDeCafe {
    constructor() {
        this.unidadesDeVenta = 0;
        this.dineroRecibido = 0;
        this.nivel = 100;
        this.saldo = 20000;
        this.valorOnza = 100;
    }
    calcularPrecio() {
        return this.unidadesDeVenta * this.valorOnza;
    }
    entregarCafe() {
        if (this.nivel >= this.unidadesDeVenta &&
            this.dineroRecibido >= this.calcularPrecio()) {
            this.nivel -= this.unidadesDeVenta;
            this.saldo += this.calcularPrecio();
        }
        this.unidadesDeVenta = 0;
        this.dineroRecibido = 0;
        console.log("Nivel de café:", maquina["nivel"]);
        console.log("Saldo:", maquina["saldo"]);
    }
    calcularCambio() {
        if (this.saldo >= this.calcularPrecio()) {
            if (this.dineroRecibido >= this.calcularPrecio()) {
                return this.dineroRecibido - this.calcularPrecio();
            }
            else {
                return "Dinero insuficiente";
            }
        }
        else {
            return "No hay saldo suficiente";
        }
    }
    recibirCantidadOnzas(unidades) {
        this.unidadesDeVenta = unidades;
    }
    recibirDinero(dinero) {
        this.dineroRecibido = dinero;
    }
}
const maquina = new MaquinaDeCafe();
maquina.recibirCantidadOnzas(10);
console.log("Precio a pagar:", maquina.calcularPrecio());
maquina.recibirDinero(600);
console.log("Cambio:", maquina.calcularCambio());
maquina.entregarCafe();
