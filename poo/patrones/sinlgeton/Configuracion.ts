class Configuracion {
  private static instancia: Configuracion | null = null;
  private configuracion: Record<string, any> = {};

  private constructor() {}

  public static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  public configurar(key: string, valor: any): void {
    this.configuracion[key] = valor;
  }

  public obtenerConfiguracion(key: string): any {
    return this.configuracion[key];
  }
}

export default Configuracion;
