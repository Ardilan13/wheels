package ahorracuandopuedes;

public class Visa extends Tarjeta {
    public Visa(double montoApertura) {
        super(montoApertura);
    }

    public double cuotaDeManejo() {
        // Calcular la cuota de manejo con el descuento Diamante
        double descuentoDiamante = Descuento.DIAMANTE.getValorDescontado(montoApertura);
        double cuotaManejo = 20000.0 - descuentoDiamante;
        return cuotaManejo;
    }

    public static void main(String[] args) {
        // Ejemplo de uso para la clase Visa
        Visa tarjetaVisa = new Visa(2000.0);
        double cuotaManejo = tarjetaVisa.cuotaDeManejo();
        System.out.println("Cuota de manejo para tarjeta Visa: $" + cuotaManejo);
    }

    @Override
    public double calcularDescuento() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}

