/* eslint-disable @typescript-eslint/no-explicit-any */
import { Command } from './Command';
import { Receiver } from './Receiver';

export class ConcreteCommand1 implements Command {
  constructor(
    private receiver: Receiver,
    private receiverParams: any[],
  ) {}

  execute(): void {
    const [a, b, c] = this.receiverParams;
    this.receiver.operation(a, b, c);
  }
}
