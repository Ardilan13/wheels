class Usuario {
  constructor(
    public id: number,
    public nombre: string,
    public tipoUsuario: string
  ) {}
}

class Vehiculo {
  constructor(
    public capacidad: number,
    public tipo: string,
    public placa: string,
    public color: string,
    public modelo: string
  ) {}
}

class Ruta {
  constructor(
    public inicio: string,
    public fin: string,
    public puntos: string[],
    public horaInicio: string,
    public precio: number
  ) {}

  obtenerDatosRuta(): string {
    return `
      Lugar Salida: ${this.inicio}
      Final de Ruta: ${this.fin}
      Puntos de Referencia: ${this.puntos.join(", ")}
      Hora de Salida: ${this.horaInicio}
      Precio: $${this.precio}
    `;
  }
}

export { Usuario, Vehiculo, Ruta };
