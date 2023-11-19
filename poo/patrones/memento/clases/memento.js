"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memento = void 0;
class Memento {
    constructor(content) {
        this.content = content;
    }
    getSavedContent() {
        return this.content;
    }
}
exports.Memento = Memento;
