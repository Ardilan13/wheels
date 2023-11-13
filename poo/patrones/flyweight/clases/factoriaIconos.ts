import IconoFlyweight from "./iconoFlyweight";

class FactoriaIconos {
  private iconos: { [tipo: string]: IconoFlyweight } = {};

  obtenerIcono(tipo: string, imagen: string): IconoFlyweight {
    if (!this.iconos[tipo]) {
      this.iconos[tipo] = new IconoFlyweight(tipo, imagen);
    }
    return this.iconos[tipo];
  }
}

export default FactoriaIconos;
