package ahorracuandopuedes;

// Clase abstracta para Tarjeta


abstract class Tarjeta {
    protected double montoApertura;

    public Tarjeta(double montoApertura) {
        this.montoApertura = montoApertura;
    }

    public abstract double calcularDescuento();

    public double calcularCoutaManejo() {
        double descuento = calcularDescuento();
        return montoApertura * (1 - descuento);
    }
}

// Interfaz para PatronCartera
interface PatronCartera {
    void registrarCartera(double cuota);
}

// Clase concreta para el tipo de tarjeta "Joven"
class TarjetaJoven extends Tarjeta {
    public TarjetaJoven(double montoApertura) {
        super(montoApertura);
    }

    @Override
    public double calcularDescuento() {
        return 0.08; // Descuento del 8%
    }
}

// Clase concreta para el tipo de tarjeta "Nomina"
class TarjetaNomina extends Tarjeta {
    public TarjetaNomina(double montoApertura) {
        super(montoApertura);
    }

    @Override
    public double calcularDescuento() {
        return 0.12; // Descuento del 12%
    }
}

// Clase concreta para el tipo de tarjeta "Visa"
class TarjetaVisa extends Tarjeta {
    public TarjetaVisa(double montoApertura) {
        super(montoApertura);
    }

    @Override
    public double calcularDescuento() {
        return 0.15; // Descuento del 15%
    }
}

// Clase para el registro de cartera
class Cartera implements PatronCartera {
    private double totalCartera = 0;

    @Override
    public void registrarCartera(double cuota) {
        totalCartera += cuota;
        System.out.println("Cartera registrada: $" + cuota);
    }

    public double getTotalCartera() {
        return totalCartera;
    }
}



// Clase Demo para demostrar el funcionamiento

public class AhorraCuandoPuedes {


    public static void main(String[] args) {
         // Ejemplo de uso
        Tarjeta tarjetaJoven = new TarjetaJoven(1000.0);
        Tarjeta tarjetaNomina = new TarjetaNomina(1500.0);
        Tarjeta tarjetaVisa = new TarjetaVisa(2000.0);

        Cartera cartera = new Cartera();

        double cuotaJoven = tarjetaJoven.calcularCoutaManejo();
        double cuotaNomina = tarjetaNomina.calcularCoutaManejo();
        double cuotaVisa = tarjetaVisa.calcularCoutaManejo();

        cartera.registrarCartera(cuotaJoven);
        cartera.registrarCartera(cuotaNomina);
        cartera.registrarCartera(cuotaVisa);
        
        double monto = 1000.0;
        double descuentoBasico = Descuento.BASICO.getValorDescontado(monto);
        double descuentoPlatino = Descuento.PLATINO.getValorDescontado(monto);
        double descuentoDiamante = Descuento.DIAMANTE.getValorDescontado(monto);

        System.out.println("Descuento Básico: $" + descuentoBasico);
        System.out.println("Descuento Platino: $" + descuentoPlatino);
        System.out.println("Descuento Diamante: $" + descuentoDiamante);

        System.out.println("Total de cartera registrada: $" + cartera.getTotalCartera());
    }
    
}

