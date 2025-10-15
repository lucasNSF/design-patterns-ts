import { Command } from './Command';

export class ConcreteCommand2 implements Command {
  execute(): void {
    console.log('concrete command 2');
  }
}
