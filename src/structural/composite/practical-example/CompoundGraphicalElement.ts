import { Coordinates, GraphicalElement } from './GraphicalElement';

export class CompoundGraphicalElement implements GraphicalElement {
  private readonly elements: Map<string, GraphicalElement> = new Map();

  constructor(private coordinates: Coordinates) {}

  add(id: string, element: GraphicalElement) {
    this.elements.set(id, element);
  }

  remove(id: string) {
    this.elements.delete(id);
  }

  getCoordinates(): Coordinates {
    return this.coordinates;
  }

  draw(): void {
    for (const element of this.elements.values()) {
      element.draw();
    }
  }
}
