"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const memento_1 = require("./memento");
class Editor {
    constructor() {
        this.content = "";
    }
    getContent() {
        return this.content;
    }
    setContent(content) {
        this.content = content;
    }
    createMemento() {
        return new memento_1.Memento(this.content);
    }
    restoreFromMemento(memento) {
        this.content = memento.getSavedContent();
    }
}
exports.Editor = Editor;
