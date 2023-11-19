abstract class Handler {
  protected successor: Handler | null = null;

  setSuccessor(successor: Handler): void {
    this.successor = successor;
  }

  handleRequest(request: string): void {
    if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

class Level1Support extends Handler {
  handleRequest(request: string): void {
    if (request === "problema simple") {
      console.log("El empleado de nivel 1 maneja el problema simple.");
    } else {
      super.handleRequest(request);
    }
  }
}

class Level2Support extends Handler {
  handleRequest(request: string): void {
    if (request === "problema complejo") {
      console.log("El empleado de nivel 2 maneja el problema complejo.");
    } else {
      super.handleRequest(request);
    }
  }
}

class Level3Support extends Handler {
  handleRequest(request: string): void {
    if (request === "problema grave") {
      console.log("El empleado de nivel 3 maneja el problema grave.");
    } else {
      console.log(
        "Todos los empleados intentaron resolver el problema, se necesita más atención."
      );
    }
  }
}

export { Handler, Level1Support, Level2Support, Level3Support };
