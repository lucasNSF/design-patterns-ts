import { Prototype } from './Prototype';

export class ConcretePrototype implements Prototype<ConcretePrototype> {
  private x = 1;
  private y = 'hello';

  constructor(proto?: ConcretePrototype) {
    if (proto) {
      this.x = proto.x;
      this.y = proto.y;
    }
  }

  clone(): ConcretePrototype {
    return new ConcretePrototype(this);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
}
