"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruta = exports.Vehiculo = exports.Usuario = void 0;
class Usuario {
    constructor(id, nombre, tipoUsuario) {
        this.id = id;
        this.nombre = nombre;
        this.tipoUsuario = tipoUsuario;
    }
}
exports.Usuario = Usuario;
class Vehiculo {
    constructor(capacidad, tipo, placa, color, modelo) {
        this.capacidad = capacidad;
        this.tipo = tipo;
        this.placa = placa;
        this.color = color;
        this.modelo = modelo;
    }
}
exports.Vehiculo = Vehiculo;
class Ruta {
    constructor(inicio, fin, puntos, horaInicio, precio) {
        this.inicio = inicio;
        this.fin = fin;
        this.puntos = puntos;
        this.horaInicio = horaInicio;
        this.precio = precio;
    }
    obtenerDatosRuta() {
        return `
      Lugar Salida: ${this.inicio}
      Final de Ruta: ${this.fin}
      Puntos de Referencia: ${this.puntos.join(", ")}
      Hora de Salida: ${this.horaInicio}
      Precio: $${this.precio}
    `;
    }
}
exports.Ruta = Ruta;
