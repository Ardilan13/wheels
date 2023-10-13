package ahorracuandopuedes;

public enum Descuento {
    BASICO(0.08),      // Descuento Básico del 8%
    PLATINO(0.12),     // Descuento Platino del 12%
    DIAMANTE(0.15);    // Descuento Diamante del 15%

    private double valorDescuento;

    Descuento(double valorDescuento) {
        this.valorDescuento = valorDescuento;
    }

    public double getValorDescontado(double monto) {
        return monto * valorDescuento;
    }
}