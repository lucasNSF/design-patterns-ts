import { Coordinates, GraphicalElement } from './GraphicalElement';

export class Dot implements GraphicalElement {
  constructor(private coordinates: Coordinates) {}

  getCoordinates(): Coordinates {
    return this.coordinates;
  }

  draw(): void {
    console.log('drawing a dot...');
  }
}
