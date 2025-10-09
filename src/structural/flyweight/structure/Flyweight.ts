export class Flyweight {
  constructor(private readonly repeatingState: object) {}

  getState() {
    return this.repeatingState;
  }
}
