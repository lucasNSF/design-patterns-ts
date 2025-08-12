import { Builder } from './builder';
import { ConcreteBuilder } from './ConcreteBuilder';
import { Director } from './Director';

const builder: Builder = new ConcreteBuilder();
const director = new Director(builder);

const product = director.buildProduct();

console.log(product);
