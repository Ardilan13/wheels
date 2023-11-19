"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formMediator_1 = require("./clases/formMediator");
const formField_1 = require("./clases/formField");
const mediator = new formMediator_1.FormMediator();
const nameField = new formField_1.FormField("Nombre");
const emailField = new formField_1.FormField("Email");
const passwordField = new formField_1.FormField("Contraseña");
mediator.addColleague(nameField);
mediator.addColleague(emailField);
mediator.addColleague(passwordField);
// Simulación de interacciones del usuario
nameField.onInput();
emailField.onFocus();
passwordField.onInput();
