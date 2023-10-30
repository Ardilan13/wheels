import FabricaVehiculos from "./fabricaVehiculos";
import Automovil from "./Automovil";

class FabricaAutomoviles extends FabricaVehiculos {
  crearVehiculo() {
    return new Automovil();
  }
}
export default FabricaAutomoviles;
