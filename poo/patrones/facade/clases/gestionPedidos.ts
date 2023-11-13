class GestionPedidos {
  generarPedido(producto: string, cantidad: number): string {
    console.log(`Generando pedido de ${cantidad} unidades de ${producto}.`);
    return `Pedido #123`;
  }
}

export default GestionPedidos;
