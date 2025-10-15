import { Command } from './Command';
import { ConcreteCommand1 } from './ConcreteCommand1';
import { ConcreteCommand2 } from './ConcreteCommand2';
import { Invoker } from './Invoker';
import { Receiver } from './Receiver';

const receiver = new Receiver();
const invoker = new Invoker();

function execCommand(command: Command) {
  invoker.setCommand(command);
  invoker.execute();
}

execCommand(new ConcreteCommand1(receiver, [1, 'abc', { test: 123 }]));
execCommand(new ConcreteCommand2());
