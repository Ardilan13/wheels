import { Memento } from "./memento";

export class Editor {
  private content: string = "";

  getContent(): string {
    return this.content;
  }

  setContent(content: string): void {
    this.content = content;
  }

  createMemento(): Memento {
    return new Memento(this.content);
  }

  restoreFromMemento(memento: Memento): void {
    this.content = memento.getSavedContent();
  }
}
