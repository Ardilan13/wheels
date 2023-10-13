package ahorracuandopuedes;

public class Joven extends Tarjeta {
    public Joven(double montoApertura) {
        super(montoApertura);
    }

    public double cuotaDeManejo() {
        // Calcular la cuota de manejo con el descuento Básico
        double descuentoBasico = Descuento.BASICO.getValorDescontado(montoApertura);
        double cuotaManejo = 20000.0 - descuentoBasico;
        return cuotaManejo;
    }

    public static void main(String[] args) {
        // Ejemplo de uso para la clase Joven
        Joven tarjetaJoven = new Joven(1000.0);
        double cuotaManejo = tarjetaJoven.cuotaDeManejo();
        System.out.println("Cuota de manejo para tarjeta Joven: $" + cuotaManejo);
    }

    @Override
    public double calcularDescuento() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}