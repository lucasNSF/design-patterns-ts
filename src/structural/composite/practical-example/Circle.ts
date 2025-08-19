import { Dot } from './Dot';

export class Circle extends Dot {
  override draw(): void {
    console.log('drawing a circle...');
  }
}
