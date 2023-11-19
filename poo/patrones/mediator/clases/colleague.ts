import { Mediator } from "./mediator";

export interface Colleague {
  setMediator(mediator: Mediator): void;
  notify(event: string): void;
}
