import { ConcreteProductB } from './ConcreteProductB';
import { Creator } from './Creator';
import { Product } from './Product';

export class ConcreteCreatorB extends Creator {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}
