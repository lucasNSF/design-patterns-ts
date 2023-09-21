import { Logistic } from './Logistic';

export class Truck implements Logistic {
  delivery(): void {
    console.log('Delivery by truck...');
  }
}
