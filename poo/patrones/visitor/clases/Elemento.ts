export interface Elemento {
  aceptar(visitante: Visitante): void;
}

export class ElementoA implements Elemento {
  aceptar(visitante: Visitante): void {
    visitante.visitarElementoA(this);
  }

  operacionA(): string {
    return "Operación A en Elemento A";
  }
}

export class ElementoB implements Elemento {
  aceptar(visitante: Visitante): void {
    visitante.visitarElementoB(this);
  }

  operacionB(): string {
    return "Operación B en Elemento B";
  }
}
