class Personaje {
  private nombre: string;
  private tipo: string;
  private nivel: number;

  constructor(nombre: string, tipo: string, nivel: number) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
  }

  public clonar(): Personaje {
    const copia = new Personaje(this.nombre, this.tipo, this.nivel);
    return copia;
  }

  public setNivel(nivel: number): void {
    this.nivel = nivel;
  }

  public getInfo(): string {
    return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Nivel: ${this.nivel}`;
  }
}

export default Personaje;
