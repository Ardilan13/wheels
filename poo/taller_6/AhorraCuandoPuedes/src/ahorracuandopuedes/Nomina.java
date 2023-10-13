package ahorracuandopuedes;

public class Nomina extends Tarjeta {
    public Nomina(double montoApertura) {
        super(montoApertura);
    }

    public double cuotaDeManejo() {
        // Calcular la cuota de manejo con el descuento Platino
        double descuentoPlatino = Descuento.PLATINO.getValorDescontado(montoApertura);
        double cuotaManejo = 20000.0 - descuentoPlatino;
        return cuotaManejo;
    }

    public static void main(String[] args) {
        // Ejemplo de uso para la clase Nomina
        Nomina tarjetaNomina = new Nomina(1500.0);
        double cuotaManejo = tarjetaNomina.cuotaDeManejo();
        System.out.println("Cuota de manejo para tarjeta Nomina: $" + cuotaManejo);
    }

    @Override
    public double calcularDescuento() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}

