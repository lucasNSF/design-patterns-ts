import { Desk } from '../Desk';

export class GamerDesk implements Desk {
  color: string = 'black';
  hasDrawers: boolean = true;

  lookup(): void {
    console.log('Olha quanta LEEEDD :O');
  }
}
