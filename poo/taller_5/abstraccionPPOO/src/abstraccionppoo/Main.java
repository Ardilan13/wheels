package abstraccionppoo;



abstract class Vehiculo{
    private final String nombre;
    
    public Vehiculo(String nombre) {
        this.nombre = nombre;
    }
    

    public abstract void hacerSonido();
    

    public String getNombre() {
        return nombre;
    }
}

class carro extends Vehiculo {
    public carro(String nombre) {
        super(nombre);
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(getNombre() + " hace: bruumm brummm");
    }
}


class Moto extends Vehiculo {
    public Moto(String nombre) {
        super(nombre);
    }
    
    @Override
    public void hacerSonido() {
        System.out.println(getNombre() + "  hace: ñaaaaaaaan");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehiculo carro = new carro("Renault");
        Vehiculo Moto = new Moto("Yamaha");
        
        carro.hacerSonido(); // 
        Moto.hacerSonido(); 
    }
}
