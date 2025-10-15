import { Command } from './Command';

export class Invoker {
  constructor(private command?: Command) {}

  setCommand(command: Command) {
    this.command = command;
  }

  execute() {
    this.command?.execute();
  }
}
