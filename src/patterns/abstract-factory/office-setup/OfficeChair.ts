import { Chair } from '../Chair';

export class OfficeChair implements Chair {
  sit(): void {
    console.log('Nunca me senti tão bem numa cadeira ergonômica...');
  }
}
