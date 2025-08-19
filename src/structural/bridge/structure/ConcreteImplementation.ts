import { Implementation } from './Implementation';

export class ConcreteImplementation implements Implementation {
  method1(): void {
    console.log('impl method 1');
  }

  method2(): void {
    console.log('impl method 2');
  }

  method3(): void {
    console.log('impl method 3');
  }
}
