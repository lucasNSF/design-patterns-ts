import { Logistic } from './Logistic';
import { Ship } from './Ship';
import { TransportCreator } from './TransportCreator';

export class ShipCreator implements TransportCreator {
  createTransport(): Logistic {
    return new Ship();
  }
}
