import { Implementation } from './Implementation';

export class Abstraction {
  constructor(protected implementation: Implementation) {}

  feature1() {
    this.implementation.method1();
  }

  feature2() {
    this.implementation.method2();
  }
}
