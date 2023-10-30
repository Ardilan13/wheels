import FabricaVehiculos from "./clases/fabricaVehiculos";
import FabricaAutomoviles from "./clases/fabricaAutomoviles";
import FabricaMotocicletas from "./clases/fabricaMotocicletas";

const fabricaAutomoviles: FabricaVehiculos = new FabricaAutomoviles();
const automovil = fabricaAutomoviles.crearVehiculo();
automovil.ensamblar();

const fabricaMotocicletas: FabricaVehiculos = new FabricaMotocicletas();
const motocicleta = fabricaMotocicletas.crearVehiculo();
motocicleta.ensamblar();
