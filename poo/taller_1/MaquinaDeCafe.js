var MaquinaDeCafe = /** @class */ (function () {
    function MaquinaDeCafe() {
        this.unidadesDeVenta = 0;
        this.dineroRecibido = 0;
        this.nivel = 100;
        this.saldo = 20000;
        this.valorOnza = 100;
    }
    MaquinaDeCafe.prototype.calcularPrecio = function () {
        return this.unidadesDeVenta * this.valorOnza;
    };
    MaquinaDeCafe.prototype.entregarCafe = function () {
        this.nivel -= this.unidadesDeVenta;
        this.saldo += this.calcularPrecio();
        this.unidadesDeVenta = 0;
        this.dineroRecibido = 0;
    };
    MaquinaDeCafe.prototype.calcularCambio = function () {
        return this.dineroRecibido - this.calcularPrecio();
    };
    MaquinaDeCafe.prototype.recibirCantidadOnzas = function (unidades) {
        this.unidadesDeVenta = unidades;
    };
    MaquinaDeCafe.prototype.recibirDinero = function (dinero) {
        this.dineroRecibido = dinero;
    };
    return MaquinaDeCafe;
}());
var maquina = new MaquinaDeCafe();
maquina.recibirCantidadOnzas(5);
console.log("Precio a pagar:", maquina.calcularPrecio());
maquina.recibirDinero(600);
console.log("Cambio:", maquina.calcularCambio());
maquina.entregarCafe();
console.log("Nivel de café:", maquina["nivel"]);
console.log("Saldo:", maquina["saldo"]);
