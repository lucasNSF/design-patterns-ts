import { AbstractProductA } from './AbstractProductA';
import { AbstractProductB } from './AbstractProductB';

// Abstract Factory
export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
