import { Chair } from '../Chair';

export class GamerChair implements Chair {
  sit(): void {
    console.log('Ai minhas costas! ;-;');
  }
}
