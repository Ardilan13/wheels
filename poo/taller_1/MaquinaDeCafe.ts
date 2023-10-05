class MaquinaDeCafe {
  private nivel: number;
  private saldo: number;
  private valorOnza: number;
  private unidadesDeVenta: number = 0;
  private dineroRecibido: number = 0;

  constructor() {
    this.nivel = 100;
    this.saldo = 20000;
    this.valorOnza = 100;
  }

  calcularPrecio(): number {
    return this.unidadesDeVenta * this.valorOnza;
  }

  entregarCafe(): void {
    if (
      this.nivel >= this.unidadesDeVenta &&
      this.dineroRecibido >= this.calcularPrecio()
    ) {
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
      } else {
        return "Dinero insuficiente";
      }
    } else {
      return "No hay saldo suficiente";
    }
  }

  recibirCantidadOnzas(unidades: number): void {
    this.unidadesDeVenta = unidades;
  }

  recibirDinero(dinero: number): void {
    this.dineroRecibido = dinero;
  }
}

const maquina = new MaquinaDeCafe();
maquina.recibirCantidadOnzas(10);
console.log("Precio a pagar:", maquina.calcularPrecio());
maquina.recibirDinero(600);
console.log("Cambio:", maquina.calcularCambio());
maquina.entregarCafe();
