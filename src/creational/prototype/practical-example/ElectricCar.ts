import { Car } from './Car';

export class ElectricCar extends Car {
  private battery = 100;

  constructor(proto?: ElectricCar) {
    super(proto);

    if (proto) {
      this.battery = proto.battery;
    }
  }

  charge() {
    this.battery = 100;
  }

  override drive(): void {
    if (this.battery > 0) {
      console.log('driving an electric car');
      this.battery -= 10;
    }
  }

  override clone(): ElectricCar {
    return new ElectricCar(this);
  }
}
