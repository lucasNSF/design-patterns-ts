import { Logistic } from './Logistic';
import { TransportCreator } from './TransportCreator';
import { Truck } from './Truck';

export class TruckCreator implements TransportCreator {
  createTransport(): Logistic {
    return new Truck();
  }
}
