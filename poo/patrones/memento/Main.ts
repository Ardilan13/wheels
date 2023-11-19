import { Editor } from "./clases/editor";
import { Caretaker } from "./clases/caretaker";

const editor = new Editor();
const caretaker = new Caretaker();

editor.setContent("Primer texto");
caretaker.addMemento(editor.createMemento());

editor.setContent("Segundo texto");
caretaker.addMemento(editor.createMemento());

editor.setContent("Tercer texto");
caretaker.addMemento(editor.createMemento());

// Restaurar el segundo estado guardado
editor.restoreFromMemento(caretaker.getMemento(1));

console.log(editor.getContent()); // Output: Segundo texto
