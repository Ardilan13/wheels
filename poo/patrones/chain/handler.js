"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level3Support = exports.Level2Support = exports.Level1Support = exports.Handler = void 0;
class Handler {
    constructor() {
        this.successor = null;
    }
    setSuccessor(successor) {
        this.successor = successor;
    }
    handleRequest(request) {
        if (this.successor) {
            this.successor.handleRequest(request);
        }
    }
}
exports.Handler = Handler;
class Level1Support extends Handler {
    handleRequest(request) {
        if (request === "problema simple") {
            console.log("El empleado de nivel 1 maneja el problema simple.");
        }
        else {
            super.handleRequest(request);
        }
    }
}
exports.Level1Support = Level1Support;
class Level2Support extends Handler {
    handleRequest(request) {
        if (request === "problema complejo") {
            console.log("El empleado de nivel 2 maneja el problema complejo.");
        }
        else {
            super.handleRequest(request);
        }
    }
}
exports.Level2Support = Level2Support;
class Level3Support extends Handler {
    handleRequest(request) {
        if (request === "problema grave") {
            console.log("El empleado de nivel 3 maneja el problema grave.");
        }
        else {
            console.log("Todos los empleados intentaron resolver el problema, se necesita más atención.");
        }
    }
}
exports.Level3Support = Level3Support;
