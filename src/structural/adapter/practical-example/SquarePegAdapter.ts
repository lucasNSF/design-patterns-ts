import { RoundPeg } from './RoundPeg';
import { SquarePeg } from './SquarePeg';

export class SquarePegAdapter implements RoundPeg {
  constructor(private peg: SquarePeg) {}

  getRadius(): number {
    return (this.peg.getWidth() * Math.sqrt(2)) / 2;
  }
}
