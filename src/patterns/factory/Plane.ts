import { Logistic } from './Logistic';

export class Plane implements Logistic {
  delivery(): void {
    console.log('Delivery by plane...');
  }
}
