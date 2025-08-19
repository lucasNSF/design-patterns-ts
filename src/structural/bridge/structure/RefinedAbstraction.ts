import { Abstraction } from './Abstraction';

export class RefinedAbstraction extends Abstraction {
  feature1(): void {
    this.implementation.method1();
  }

  feature2(): void {
    this.implementation.method2();
  }

  feature3() {
    this.implementation.method3();
  }
}
