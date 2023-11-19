import { FormMediator } from "./clases/formMediator";
import { FormField } from "./clases/formField";

const mediator = new FormMediator();
const nameField = new FormField("Nombre");
const emailField = new FormField("Email");
const passwordField = new FormField("Contraseña");

mediator.addColleague(nameField);
mediator.addColleague(emailField);
mediator.addColleague(passwordField);

// Simulación de interacciones del usuario
nameField.onInput();
emailField.onFocus();
passwordField.onInput();
