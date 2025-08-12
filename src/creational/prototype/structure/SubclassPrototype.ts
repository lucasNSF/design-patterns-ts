import { ConcretePrototype } from './ConcretePrototype';

export class SubclassPrototype extends ConcretePrototype {
  private z = { enabled: true };

  constructor(proto?: SubclassPrototype) {
    super(proto);

    if (proto) {
      // Shallow Copy
      /* this.z = proto.z; */

      // Deep Copy
      this.z = { enabled: proto.z.enabled };
    }
  }

  override clone(): SubclassPrototype {
    return new SubclassPrototype(this);
  }

  getZ() {
    return this.z;
  }
}
