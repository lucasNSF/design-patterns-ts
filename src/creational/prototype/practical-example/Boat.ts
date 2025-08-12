import { Dirigible } from './Dirigible';
import { Prototype } from './Prototype';

export class Boat implements Dirigible, Prototype<Boat> {
  private maxSpeed = 100;

  constructor(
    private color: string,
    proto?: Boat,
  ) {
    if (proto) {
      this.color = proto.color;
    }
  }

  drive(): void {
    console.log('driving a boat');
  }

  clone(): Boat {
    return new Boat(this.color, this);
  }
}
