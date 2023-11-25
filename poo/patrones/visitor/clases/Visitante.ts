import { Elemento, ElementoA, ElementoB } from "./Elemento";

export interface Visitante {
  visitarElementoA(elemento: ElementoA): void;
  visitarElementoB(elemento: ElementoB): void;
}

export class VisitanteConcreto implements Visitante {
  visitarElementoA(elemento: ElementoA): void {
    console.log(elemento.operacionA());
  }

  visitarElementoB(elemento: ElementoB): void {
    console.log(elemento.operacionB());
  }
}
