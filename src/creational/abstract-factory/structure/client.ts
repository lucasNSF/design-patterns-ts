import { AbstractFactory } from './AbstractFactory';
import { ConcreteFactory1 } from './ConcreteFactory1';

const abstractFactory: AbstractFactory = new ConcreteFactory1();

const productA = abstractFactory.createProductA();
const productB = abstractFactory.createProductB();

productA.doStuff();
productB.doSomething();
