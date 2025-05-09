import { ConcreteProductA } from './ConcreteProductA';
import { Creator } from './Creator';
import { Product } from './Product';

export class ConcreteCreatorA extends Creator {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}
