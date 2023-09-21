import { PlaneCreator } from './PlaneCreator';
import { ShipCreator } from './ShipCreator';
import { TransportCreator } from './TransportCreator';
import { TruckCreator } from './TruckCreator';

((factory: TransportCreator) => {
  factory.createTransport().delivery();
})(new ShipCreator());
