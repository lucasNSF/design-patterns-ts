import { Logistic } from './Logistic';

export class Ship implements Logistic {
  delivery(): void {
    console.log('Delivery by ship...');
  }
}
