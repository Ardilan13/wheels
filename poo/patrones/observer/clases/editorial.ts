import { Observador } from "./Observador";

export class Editorial {
  private noticias: string[] = [];
  private observadores: Observador[] = [];

  registrarObservador(obs: Observador): void {
    this.observadores.push(obs);
  }

  eliminarObservador(obs: Observador): void {
    this.observadores = this.observadores.filter((o) => o !== obs);
  }

  publicarNoticia(noticia: string): void {
    this.noticias.push(noticia);
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    this.observadores.forEach((obs) => obs.actualizar(this.noticias));
  }
}
