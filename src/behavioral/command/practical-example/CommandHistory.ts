import { Command } from './Command';

export class CommandHistory {
  private history: Command[] = [];

  push(c: Command) {
    this.history.push(c);
  }

  pop(): Command | undefined {
    return this.history.pop();
  }
}
