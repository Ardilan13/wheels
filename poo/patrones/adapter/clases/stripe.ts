import PasarelaPago from "./pasarelaPago";
import PayPal from "./paypal";

class AdaptadorStripe implements PasarelaPago {
  private paypal: PayPal;

  constructor() {
    this.paypal = new PayPal();
  }

  realizarPago(monto: number) {
    const montoEnDolares = monto / 100;
    this.paypal.realizarPagoPayPal(montoEnDolares);
  }
}

export default AdaptadorStripe;
