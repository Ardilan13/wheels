"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caretaker = void 0;
class Caretaker {
    constructor() {
        this.mementos = [];
    }
    addMemento(memento) {
        this.mementos.push(memento);
    }
    getMemento(index) {
        return this.mementos[index];
    }
}
exports.Caretaker = Caretaker;
