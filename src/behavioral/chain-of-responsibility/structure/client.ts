import { ConcreteHandler } from './ConcreteHandler';

const h1 = new ConcreteHandler();
const h2 = new ConcreteHandler();
const h3 = new ConcreteHandler();

h1.setNext(h2);
h2.setNext(h3);

h1.handle({ test: 123 });

console.log();

h1.handle({});
