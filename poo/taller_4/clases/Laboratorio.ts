import Servicio from "./Servicio";
import Muestra from "./Muestra";

export default class Laboratorio {
  private servicios: Servicio[] = [];

  constructor(servicioIni: Servicio) {
    this.setServicio(servicioIni);
  }

  public setServicio(servicio: Servicio): void {
    if (this.servicios.length < 100) {
      this.servicios.push(servicio);
    }
  }

  public registrarMuestra(muestra: Muestra, i: number): void {
    if (0 <= i && i <= 99) {
      this.servicios[i].setMuestra(muestra);
    }
  }

  public mostrarInforme(): void {
    this.servicios.forEach((element, i) => {
      var servicio = element.printServicio();
      console.log(
        "\nServicio #" +
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
          servicio.costo
      );
    });
  }

  public getLaboratorio(): any {
    return this.servicios;
  }
}
