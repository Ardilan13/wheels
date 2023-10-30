import Vehiculo from "./Vehiculo";

abstract class FabricaVehiculos {
  abstract crearVehiculo(): Vehiculo;
}
export default FabricaVehiculos;
