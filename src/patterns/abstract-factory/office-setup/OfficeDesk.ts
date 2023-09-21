import { Desk } from '../Desk';

export class OfficeDesk implements Desk {
  color: string = 'brown';
  hasDrawers: boolean = true;

  lookup(): void {
    console.log('Mesa padrão de escritório...');
  }
}
