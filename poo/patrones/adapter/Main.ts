import PasarelaPago from "./clases/pasarelaPago";
import AdaptadorStripe from "./clases/stripe";

const pasarelaPago: PasarelaPago = new AdaptadorStripe();
pasarelaPago.realizarPago(5000);
