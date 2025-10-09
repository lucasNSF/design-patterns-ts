import { Flyweight } from './Flyweight';

export class FlyweightFactory {
  private readonly flyweights = new Map<string, Flyweight>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getFlyweight(repeatingState: any) {
    if (!this.flyweights.has(repeatingState.color)) {
      this.flyweights.set(repeatingState.color, new Flyweight(repeatingState));
    }

    return this.flyweights.get(repeatingState.color)!;
  }
}
