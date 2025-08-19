export type Coordinates = {
  x: number;
  y: number;
};

export interface GraphicalElement {
  getCoordinates(): Coordinates;

  draw(): void;
}
