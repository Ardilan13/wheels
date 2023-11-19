"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const editor_1 = require("./clases/editor");
const caretaker_1 = require("./clases/caretaker");
const editor = new editor_1.Editor();
const caretaker = new caretaker_1.Caretaker();
editor.setContent("Primer texto");
caretaker.addMemento(editor.createMemento());
editor.setContent("Segundo texto");
caretaker.addMemento(editor.createMemento());
editor.setContent("Tercer texto");
caretaker.addMemento(editor.createMemento());
// Restaurar el segundo estado guardado
editor.restoreFromMemento(caretaker.getMemento(1));
console.log(editor.getContent()); // Output: Segundo texto
