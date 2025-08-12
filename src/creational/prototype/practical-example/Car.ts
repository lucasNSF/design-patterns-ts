import { Dirigible } from './Dirigible';
import { Prototype } from './Prototype';

export class Car implements Dirigible, Prototype<Car> {
  private wheels = 4;
  private ports = 4;
  private maxSpeed = 300;
  private color = 'black';

  constructor(proto?: Car) {
    if (proto) {
      this.wheels = proto.wheels;
      this.ports = proto.ports;
      this.maxSpeed = proto.maxSpeed;
      this.color = proto.color;
    }
  }

  drive(): void {
    console.log('driving a car');
  }

  clone(): Car {
    return new Car(this);
  }
}
