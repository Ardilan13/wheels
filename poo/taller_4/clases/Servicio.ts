import Muestra from "./Muestra";
export default class Servicio {
  private muestraSimple: Muestra[] = [];
  private muestraEspecializada: Muestra[] = [];

  constructor(muestraIni: Muestra) {
    this.setMuestra(muestraIni);
  }

  public setMuestra(muestra: Muestra): void {
    if (muestra.getProfundidad() <= 10 && this.muestraSimple.length < 30) {
      this.muestraSimple.push(muestra);
    } else if (this.muestraEspecializada.length < 30) {
      this.muestraEspecializada.push(muestra);
    }
  }

  public getServicio(): any {
    return {
      muestraSimple: this.muestraSimple,
      muestraEspecializada: this.muestraEspecializada,
    };
  }

  public printServicio(): any {
    var profundidadSimple: number = 0;
    var profundidadEspecializado: number = 0;
    var costo: number = 0;
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
      promedioEspecializado:
        profundidadEspecializado / this.muestraEspecializada.length,
      costo: costo,
    };
  }
}
