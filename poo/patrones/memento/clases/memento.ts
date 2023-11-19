export class Memento {
  private readonly content: string;

  constructor(content: string) {
    this.content = content;
  }

  getSavedContent(): string {
    return this.content;
  }
}
