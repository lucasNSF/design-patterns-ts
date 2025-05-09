import { AbstractFactory } from './AbstractFactory';
import { AbstractProductA } from './AbstractProductA';
import { AbstractProductB } from './AbstractProductB';
import { ConcreteProductA } from './ConcreteProductA';
import { ConcreteProductB } from './ConcreteProductB';

export class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB();
  }
}
