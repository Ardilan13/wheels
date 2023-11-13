class ManejoInventario {
  verificarDisponibilidad(producto: string): boolean {
    console.log(`Verificando disponibilidad de ${producto} en el inventario.`);
    return Math.random() < 0.8;
  }
}

export default ManejoInventario;
