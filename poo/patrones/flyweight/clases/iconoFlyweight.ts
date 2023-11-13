class IconoFlyweight {
  private tipo: string;
  private imagen: string;

  constructor(tipo: string, imagen: string) {
    this.tipo = tipo;
    this.imagen = imagen;
  }

  mostrar(posicionX: number, posicionY: number): void {
    console.log(
      `Mostrando icono de tipo ${this.tipo} en (${posicionX}, ${posicionY})`
    );
  }
}

export default IconoFlyweight;
