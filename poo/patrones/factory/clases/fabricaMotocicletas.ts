import FabricaVehiculos from "./fabricaVehiculos";
import Motocicleta from "./Motocicleta";

class FabricaMotocicletas extends FabricaVehiculos {
  crearVehiculo() {
    return new Motocicleta();
  }
}
export default FabricaMotocicletas;
