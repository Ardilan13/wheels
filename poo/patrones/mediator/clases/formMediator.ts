import { Mediator } from "./mediator";
import { Colleague } from "./colleague";

export class FormMediator implements Mediator {
  private colleagues: Colleague[] = [];

  addColleague(colleague: Colleague): void {
    this.colleagues.push(colleague);
    colleague.setMediator(this);
  }

  notify(sender: Colleague, event: string): void {
    this.colleagues.forEach((colleague) => {
      if (colleague !== sender) {
        colleague.notify(event);
      }
    });
  }
}
