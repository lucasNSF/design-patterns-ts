import { Logistic } from './Logistic';

export interface TransportCreator {
  createTransport(): Logistic;
}
