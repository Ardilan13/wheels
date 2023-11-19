"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = void 0;
class FormField {
    constructor(name) {
        this.name = name;
    }
    setMediator(mediator) {
        this.mediator = mediator;
    }
    notify(event) {
        console.log(`${this.name} ha sido notificado sobre el evento: ${event}`);
    }
    onInput() {
        this.mediator.notify(this, "input");
    }
    onFocus() {
        this.mediator.notify(this, "focus");
    }
}
exports.FormField = FormField;
