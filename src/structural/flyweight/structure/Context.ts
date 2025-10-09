import { Flyweight } from './Flyweight';
import { FlyweightFactory } from './FlyweightFactory';

export class Context {
  private readonly flyweightFactory = new FlyweightFactory();
  private flyweight: Flyweight;

  constructor(
    private readonly immutableState: object,
    repeatedState: object,
  ) {
    this.flyweight = this.flyweightFactory.getFlyweight(repeatedState);
  }

  operation() {
    console.log(this.immutableState, this.flyweight.getState());
  }
}
