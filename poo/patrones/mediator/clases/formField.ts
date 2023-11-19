import { Colleague } from "./colleague";
import { Mediator } from "./mediator";

export class FormField implements Colleague {
  private mediator!: Mediator;

  constructor(private name: string) {}

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  notify(event: string): void {
    console.log(`${this.name} ha sido notificado sobre el evento: ${event}`);
  }

  onInput(): void {
    this.mediator.notify(this, "input");
  }

  onFocus(): void {
    this.mediator.notify(this, "focus");
  }
}
