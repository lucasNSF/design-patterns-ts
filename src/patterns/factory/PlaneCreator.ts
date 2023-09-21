import { Logistic } from './Logistic';
import { Plane } from './Plane';
import { TransportCreator } from './TransportCreator';

export class PlaneCreator implements TransportCreator {
  createTransport(): Logistic {
    return new Plane();
  }
}
